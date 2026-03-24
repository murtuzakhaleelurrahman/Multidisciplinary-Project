// Get API base from localStorage or use default
const customAPI = localStorage.getItem('CUSTOM_API_URL');
const API_BASE = customAPI || "https://bus-tracking-and-occupancy-system.onrender.com";

// Loading state
let isLoading = false;
let retryCount = 0;
const MAX_RETRIES = 3;

// Chart instance management
let etaChart = null;

// ML model info label (single source of truth)
const ML_MODEL_NAME = "XGBoost";
const ML_ETA_IMPROVEMENT = "~35%";
const ML_MODEL_TOOLTIP = "ETA predictions are generated using an XGBoost regression model trained on historical segment speed data";

/**
 * Show loading state in UI
 */
function showLoadingState() {
    const container = document.getElementById("routes-container");
    const banner = document.getElementById("decision-banner");
    const chartContainer = document.getElementById("chart-container");
    const recommendationContainer = document.getElementById("recommendation-card");
    
    const loadingHTML = `
        <div class="loading-state fade-in">
            <div class="loading-spinner">
                <div class="spinner"></div>
            </div>
            <p class="loading-text">Analyzing routes...</p>
            <p class="loading-subtext">Fetching real-time traffic data</p>
        </div>
    `;
    
    banner.innerHTML = loadingHTML;
    container.innerHTML = `
        <div class="loading-state fade-in">
            <div class="loading-spinner">
                <div class="spinner"></div>
            </div>
            <p class="loading-text">Loading routes...</p>
        </div>
    `;
    
    // Hide chart and recommendation during loading
    if (chartContainer) {
        chartContainer.style.display = 'none';
    }
    if (recommendationContainer) {
        recommendationContainer.style.display = 'none';
    }
}

/**
 * Show error state with retry button
 */
function showErrorState(errorMessage) {
    const container = document.getElementById("routes-container");
    const banner = document.getElementById("decision-banner");
    const chartContainer = document.getElementById("chart-container");
    const recommendationContainer = document.getElementById("recommendation-card");
    
    // Detailed error messages
    let userMessage = "Unable to fetch route comparison.";
    let technicalDetails = "";
    
    if (errorMessage.includes("HTTP")) {
        userMessage = "Backend service is temporarily unavailable.";
        technicalDetails = "The route comparison service is not responding. Please check your connection.";
    } else if (errorMessage.includes("Failed to fetch")) {
        userMessage = "Network connection error.";
        technicalDetails = "Unable to reach the server. Check your internet connection.";
    } else if (errorMessage.includes("timeout")) {
        userMessage = "Request timed out.";
        technicalDetails = "The service took too long to respond. Please try again.";
    } else {
        technicalDetails = errorMessage;
    }
    
    const errorHTML = `
        <div class="error-state fade-in">
            <div class="error-icon">❌</div>
            <h3 class="error-title">Failed to Load Routes</h3>
            <p class="error-message">${userMessage}</p>
            <p class="error-details">${technicalDetails}</p>
            <button class="retry-button" onclick="handleRetry()">
                🔄 Try Again
            </button>
            <p class="error-hint">If the problem persists, please refresh the page.</p>
        </div>
    `;
    
    banner.innerHTML = errorHTML;
    container.innerHTML = errorHTML;
    
    // Hide chart and recommendation on error
    if (chartContainer) {
        chartContainer.style.display = 'none';
    }
    if (recommendationContainer) {
        recommendationContainer.style.display = 'none';
    }
    
    // Log technical error for debugging
    console.error("Route Comparison Error:", {
        message: errorMessage,
        timestamp: new Date().toISOString(),
        retryCount: retryCount,
        apiBase: API_BASE
    });
}

/**
 * Show empty state when no routes available
 */
function showEmptyState() {
    const container = document.getElementById("routes-container");
    const banner = document.getElementById("decision-banner");
    const chartContainer = document.getElementById("chart-container");
    const recommendationContainer = document.getElementById("recommendation-card");
    
    const emptyHTML = `
        <div class="empty-state fade-in">
            <div class="empty-icon">📭</div>
            <h3 class="empty-title">No Route Data Available</h3>
            <p class="empty-message">Unable to retrieve route comparison data.</p>
            <button class="retry-button" onclick="handleRetry()">
                🔄 Try Again
            </button>
        </div>
    `;
    
    banner.innerHTML = emptyHTML;
    container.innerHTML = emptyHTML;
    
    // Hide chart and recommendation on empty state
    if (chartContainer) {
        chartContainer.style.display = 'none';
    }
    if (recommendationContainer) {
        recommendationContainer.style.display = 'none';
    }
}

/**
 * Handle retry logic with exponential backoff
 */
function handleRetry() {
    if (retryCount >= MAX_RETRIES) {
        const container = document.getElementById("routes-container");
        container.innerHTML = `
            <div class="error-state fade-in">
                <div class="error-icon">⚠️</div>
                <h3 class="error-title">Maximum Retries Reached</h3>
                <p class="error-message">Unable to load routes after multiple attempts.</p>
                <p class="error-hint">
                    Please check your internet connection and try refreshing the page.
                    <br/>If the problem persists, contact support.
                </p>
                <button class="retry-button" onclick="resetAndRetry()">
                    🔄 Start Over
                </button>
            </div>
        `;
        return;
    }
    
    retryCount++;
    console.log(`Retry attempt ${retryCount}/${MAX_RETRIES}`);
    loadRouteComparison();
}

/**
 * Reset retry counter and start fresh
 */
function resetAndRetry() {
    retryCount = 0;
    loadRouteComparison();
}

/**
 * Validate API response structure
 */
function validateApiResponse(data) {
    if (!data) {
        throw new Error("Empty response from server");
    }
    
    if (!data.routes || !Array.isArray(data.routes) || data.routes.length === 0) {
        throw new Error("No route data in response");
    }
    
    if (!data.fastest_route) {
        throw new Error("Missing fastest route information");
    }
    
    // Validate each route has required fields
    const requiredFields = ['route_id', 'eta_minutes', 'average_speed_kmh', 'congestion_level', 'reliability_score'];
    data.routes.forEach((route, index) => {
        const missingFields = requiredFields.filter(field => !(field in route));
        if (missingFields.length > 0) {
            throw new Error(`Route ${index} missing fields: ${missingFields.join(', ')}`);
        }
    });
    
    return true;
}

/**
 * Main load function with comprehensive error handling
 */
async function loadRouteComparison() {
    try {
        if (isLoading) {
            console.warn("Route comparison already loading, ignoring duplicate request");
            return;
        }
        
        isLoading = true;
        showLoadingState();

        const response = await fetch(`${API_BASE}/api/routes/compare`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            timeout: 15000 // 15 second timeout
        });
        
        if (!response.ok) {
            const statusText = response.statusText || `HTTP ${response.status}`;
            throw new Error(`${statusText}: Failed to fetch route comparison`);
        }

        const data = await response.json();
        
        // Validate response structure
        validateApiResponse(data);
        
        // Reset retry counter on success
        retryCount = 0;
        
        // Render with fade-in animation
        renderRecommendation(data);  // NEW: Recommendation card first
        renderBanner(data);
        renderChart(data.routes);
        renderRoutes(data.routes, data.fastest_route);
        renderFooter();
        
        // Log successful load
        console.log("Routes loaded successfully", {
            fastest: data.fastest_route,
            etaDiff: data.eta_difference_minutes,
            timestamp: new Date().toISOString()
        });

    } catch (err) {
        console.error("Error loading routes:", err);
        
        // Show appropriate error message
        if (err.message.includes("No route data")) {
            showEmptyState();
        } else {
            showErrorState(err.message);
        }
    } finally {
        isLoading = false;
    }
}

/**
 * Render AI Recommendation Card (Top Priority)
 */
function renderRecommendation(data) {
    const recommendationContainer = document.getElementById("recommendation-card");
    
    // Validate data
    if (!data || !data.routes || data.routes.length === 0) {
        if (recommendationContainer) {
            recommendationContainer.style.display = 'none';
        }
        return;
    }
    
    // Find the fastest route object
    const fastestRoute = data.routes.find(r => r.route_id === data.fastest_route);
    
    if (!fastestRoute) {
        if (recommendationContainer) {
            recommendationContainer.style.display = 'none';
        }
        return;
    }
    
    // Determine confidence level based on reliability_score
    const reliability = fastestRoute.reliability_score || 0.5;
    let confidenceLevel = "Low";
    let confidenceClass = "confidence-low";
    let confidenceIcon = "⚠️";
    
    if (reliability >= 0.75) {
        confidenceLevel = "High";
        confidenceClass = "confidence-high";
        confidenceIcon = "✅";
    } else if (reliability >= 0.5) {
        confidenceLevel = "Medium";
        confidenceClass = "confidence-medium";
        confidenceIcon = "ℹ️";
    }
    
    // Check if fastest route is NOT fully ML and add warning to recommendation
    const fastestRoutePredictionMode = fastestRoute.mode || "ml";
    let predictionModeNote = '';
    
    if (fastestRoutePredictionMode === "fallback" || fastestRoutePredictionMode === "fallback-deterministic") {
        predictionModeNote = `
            <div class="recommendation-mode-warning fallback-warning">
                <span class="warning-icon">⚠️</span>
                <span class="warning-text">Limited ML availability – using fallback for this route</span>
            </div>
        `;
    } else if (fastestRoutePredictionMode === "ml-hybrid" || fastestRoutePredictionMode === "hybrid") {
        predictionModeNote = `
            <div class="recommendation-mode-warning hybrid-warning">
                <span class="warning-icon">⚠️</span>
                <span class="warning-text">Using partial ML prediction – some segments used fallback</span>
            </div>
        `;
    }
    
    // Build recommendation card HTML
    const recommendationHTML = `
        <div class="recommendation-card-content fade-in">
            <div class="recommendation-header">
                <div class="recommendation-badge">🚀 AI Recommended</div>
                <div class="recommendation-route-title">
                    Best Route: <span class="route-highlight">${data.fastest_route}</span>
                </div>
            </div>
            
            <div class="recommendation-main">
                <div class="recommendation-eta">
                    <div class="eta-box">
                        <span class="eta-label">📍 ETA</span>
                        <span class="eta-time">${fastestRoute.eta_minutes}</span>
                        <span class="eta-unit">min</span>
                    </div>
                </div>
                
                <div class="recommendation-benefits">
                    <div class="benefit-item">
                        <span class="benefit-icon">⚡</span>
                        <span class="benefit-text"><strong>${data.eta_difference_minutes}</strong> min faster</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">🧠</span>
                        <span class="benefit-text"><strong>${confidenceLevel}</strong> confidence</span>
                    </div>
                </div>
            </div>
            
            <div class="recommendation-reasoning">
                <span class="reasoning-icon">💡</span>
                <span class="reasoning-text">${data.decision_reason || fastestRoute.reason || 'Optimized for your journey'}</span>
            </div>
            
            ${predictionModeNote}
            
            <div class="recommendation-confidence-bar">
                <div class="confidence-meter">
                    <div class="confidence-fill ${confidenceClass}" style="width: ${Math.round(reliability * 100)}%"></div>
                </div>
                <span class="confidence-text">${confidenceIcon} ${confidenceLevel} Confidence (${Math.round(reliability * 100)}%)</span>
            </div>
        </div>
    `;
    
    // Render the recommendation card
    if (recommendationContainer) {
        recommendationContainer.innerHTML = recommendationHTML;
        recommendationContainer.style.display = 'block';
        
        console.log("Recommendation card rendered:", {
            route: data.fastest_route,
            eta: fastestRoute.eta_minutes,
            savings: data.eta_difference_minutes,
            confidence: confidenceLevel,
            reliability: reliability
        });
    }
}

/**
 * Render ETA comparison bar chart
 */
function renderChart(routes) {
    // Validate routes data
    if (!routes || !Array.isArray(routes) || routes.length === 0) {
        console.warn("Cannot render chart: no valid routes data");
        return;
    }

    // Check if all required fields exist
    const hasRequiredFields = routes.every(r => 
        r.route_id && 
        r.eta_minutes !== undefined && 
        r.baseline_eta_minutes !== undefined
    );

    if (!hasRequiredFields) {
        console.warn("Cannot render chart: missing required ETA fields", routes);
        return;
    }

    try {
        const chartContainer = document.getElementById("chart-container");
        if (!chartContainer) {
            console.error("Chart container not found");
            return;
        }

        const chartCanvas = document.getElementById("etaChart");
        if (!chartCanvas) {
            console.error("Chart canvas not found");
            return;
        }

        // Destroy existing chart if present
        if (etaChart) {
            etaChart.destroy();
            etaChart = null;
        }

        // Prepare data for chart
        const labels = routes.map(r => r.route_id);
        const mlData = routes.map(r => r.eta_minutes);
        const baselineData = routes.map(r => r.baseline_eta_minutes);

        // Calculate improvements
        const improvements = routes.map(r => r.baseline_eta_minutes - r.eta_minutes);

        // Get canvas context
        const ctx = chartCanvas.getContext('2d');

        // Create bar chart
        etaChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Baseline ETA',
                        data: baselineData,
                        backgroundColor: 'rgba(255, 152, 0, 0.7)',
                        borderColor: 'rgba(255, 152, 0, 1)',
                        borderWidth: 2,
                        borderRadius: 6,
                        hoverBackgroundColor: 'rgba(255, 152, 0, 0.9)',
                        hoverBorderWidth: 3
                    },
                    {
                        label: 'ML ETA (Optimized)',
                        data: mlData,
                        backgroundColor: 'rgba(76, 175, 80, 0.7)',
                        borderColor: 'rgba(76, 175, 80, 1)',
                        borderWidth: 2,
                        borderRadius: 6,
                        hoverBackgroundColor: 'rgba(76, 175, 80, 0.9)',
                        hoverBorderWidth: 3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 14,
                                weight: '600'
                            },
                            color: '#333',
                            padding: 15,
                            usePointStyle: true,
                            boxWidth: 12
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        borderColor: '#fff',
                        borderWidth: 1,
                        displayColors: true,
                        callbacks: {
                            afterLabel: (context) => {
                                const routeIndex = context.dataIndex;
                                const improvement = improvements[routeIndex];
                                if (improvement && context.datasetIndex === 1) {
                                    return `Saves ${Math.round(improvement * 10) / 10} min ✨`;
                                }
                                return '';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Time (minutes)',
                            font: {
                                size: 13,
                                weight: '600'
                            }
                        },
                        ticks: {
                            font: {
                                size: 12
                            },
                            color: '#666',
                            callback: (value) => value + ' min'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 12,
                                weight: '500'
                            },
                            color: '#333'
                        },
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    }
                }
            }
        });

        // Show chart container
        chartContainer.style.display = 'block';
        console.log("ETA chart rendered successfully", {routes: labels, ml: mlData, baseline: baselineData});

    } catch (err) {
        console.error("Error rendering chart:", err);
    }
}

function renderBanner(data) {
    const banner = document.getElementById("decision-banner");
    
    // Validate data
    if (!data || !data.routes || data.routes.length === 0) {
        showEmptyState();
        return;
    }
    
    const fastestRoute = data.routes.find(r => r.route_id === data.fastest_route);
    
    if (!fastestRoute) {
        showEmptyState();
        return;
    }

    const congestionEmoji = 
        fastestRoute.congestion_level === "free_flow" ? "🟢" :
        fastestRoute.congestion_level === "heavy" ? "🔴" :
        "🟡";

    // Use API-provided decision_reason or fallback to generated reasoning
    const reasoning = data.decision_reason || 
        (fastestRoute.reason || "Optimized for your journey");

    banner.innerHTML = `
        <div class="banner-content fade-in">
            <div class="banner-header">
                <h2>🚀 Recommended Route: <strong>${data.fastest_route}</strong></h2>
            </div>
            <div class="banner-eta">
                <span class="eta-value">${fastestRoute.eta_minutes}</span>
                <span class="eta-label">minutes</span>
            </div>
            <div class="banner-details">
                <p class="banner-reasoning">
                    ${congestionEmoji} ${reasoning}
                </p>
                <p class="banner-savings">
                    ⚡ Saves <strong>${data.eta_difference_minutes}</strong> minute${data.eta_difference_minutes !== 1 ? 's' : ''} vs. alternative
                </p>
            </div>
        </div>
    `;
}

function renderRoutes(routes, fastestRoute) {
    const container = document.getElementById("routes-container");
    container.innerHTML = "";

    // Validate routes exist
    if (!routes || routes.length === 0) {
        showEmptyState();
        return;
    }

    routes.forEach((route, index) => {
        // Validate route object has required fields
        if (!route.route_id || route.eta_minutes === undefined) {
            console.warn(`Invalid route data at index ${index}`, route);
            return; // Skip invalid route
        }

        const isFastest = route.route_id === fastestRoute;
        const congestionClass = 
            route.congestion_level === "free_flow" ? "free" :
            route.congestion_level === "heavy" ? "heavy" :
            "moderate";

        const modeEmoji = route.mode === "ML" ? "🤖" : "⚙️";
        const reliabilityPercent = Math.round((route.reliability_score || 0.5) * 100);
        
        // Determine confidence level and description
        let confidenceLevel;
        let confidenceDescription;
        let confidenceIcon;
        
        if (route.reliability_score >= 0.75) {
            confidenceLevel = "high";
            confidenceDescription = "High confidence prediction";
            confidenceIcon = "✅";
        } else if (route.reliability_score >= 0.5) {
            confidenceLevel = "medium";
            confidenceDescription = "Moderate confidence";
            confidenceIcon = "⚠️";
        } else {
            confidenceLevel = "low";
            confidenceDescription = "Low confidence – use caution";
            confidenceIcon = "⚠️";
        }
        
        // Generate fallback/hybrid warning based on prediction mode
        let predictionModeWarning = '';
        let modeBadgeClass = 'mode-ml';
        
        if (route.mode === "fallback" || route.mode === "fallback-deterministic") {
            predictionModeWarning = `
            <div class="prediction-mode-warning fallback-warning">
                <span class="warning-icon">⚠️</span>
                <span class="warning-text">Using fallback model (fixed speed estimate)</span>
            </div>
        `;
            modeBadgeClass = 'mode-fallback';
        } else if (route.mode === "ml-hybrid" || route.mode === "hybrid") {
            predictionModeWarning = `
            <div class="prediction-mode-warning hybrid-warning">
                <span class="warning-icon">⚠️</span>
                <span class="warning-text">Partial ML prediction (some segments used fallback)</span>
            </div>
        `;
            modeBadgeClass = 'mode-hybrid';
        } else if (route.mode === "ml" || route.mode === "ML") {
            modeBadgeClass = 'mode-ml';
        }
        
        const card = document.createElement("div");
        card.className = `route-card congestion-${congestionClass}${isFastest ? ' fastest' : ''} fade-in`;
        card.style.animationDelay = `${index * 0.1}s`; // Stagger animation

        card.innerHTML = `
            <!-- Route ID Header -->
            <div class="route-header">
                <div class="route-title-section">
                    <h3 class="route-id">${route.route_id}</h3>
                    ${isFastest ? '<span class="fastest-badge">⭐ Fastest</span>' : ''}
                </div>
                <span class="mode-badge ${modeBadgeClass}">${modeEmoji} ${route.mode}</span>
            </div>

            <!-- Prediction Mode Warning (Fallback/Hybrid) -->
            ${predictionModeWarning}

            <!-- ETA Section (Main Highlight) -->
            <div class="eta-section">
                <div class="eta-metric">
                    <span class="eta-value">${route.eta_minutes}</span>
                    <span class="eta-unit">min</span>
                </div>
                <div class="eta-subtitle">Estimated Time</div>
            </div>

            <!-- Comparison Section -->
            <div class="comparison-section">
                <div class="comparison-item">
                    <span class="comparison-label">Baseline</span>
                    <span class="comparison-value">${route.baseline_eta_minutes} min</span>
                </div>
                <div class="comparison-divider">→</div>
                <div class="comparison-item improvement">
                    <span class="comparison-label">ML Optimized</span>
                    <span class="comparison-improvement">↓ ${route.ml_improvement_minutes} min faster</span>
                </div>
            </div>

            <!-- Metrics Section -->
            <div class="metrics-section">
                <div class="metric-item">
                    <span class="metric-icon">🚗</span>
                    <div class="metric-content">
                        <span class="metric-label">Avg Speed</span>
                        <span class="metric-value">${route.average_speed_kmh} km/h</span>
                    </div>
                </div>
                <div class="metric-item">
                    <span class="metric-icon">🎯</span>
                    <div class="metric-content">
                        <span class="metric-label">Congestion</span>
                        <span class="metric-value congestion-label congestion-${congestionClass}">
                            ${route.congestion_level}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Confidence Indicator (Reliability Bar) - Enhanced -->
            <div class="confidence-section">
                <div class="confidence-header">
                    <div class="confidence-label-group">
                        <span class="confidence-label">Prediction Confidence</span>
                        <span class="confidence-description" title="${confidenceDescription}">
                            ${confidenceIcon} ${confidenceDescription}
                        </span>
                    </div>
                    <span class="confidence-percent confidence-${confidenceLevel}">${reliabilityPercent}%</span>
                </div>
                <div class="confidence-bar">
                    <div class="confidence-fill confidence-fill-${confidenceLevel}" style="width: ${reliabilityPercent}%"></div>
                </div>
                <span class="confidence-hint">Based on traffic consistency and historical patterns</span>
            </div>

            <!-- Route Reasoning - Explainable AI -->
            ${route.reason ? `
            <div class="route-reason-section">
                <p class="route-reason">💡 ${route.reason}</p>
            </div>
            ` : ''}
        `;

        container.appendChild(card);
    });
}

function renderFooter() {
    const footer = document.getElementById("system-footer");
    footer.innerHTML = `
        <div class="footer-content">
            <span class="footer-text">
                🔬 ML-Powered ETA System | ⚡ Real-Time Route Intelligence | 📊 Powered by XGBoost
            </span>
            <div class="ml-info" title="${ML_MODEL_TOOLTIP}">
                🧠 ML Model: ${ML_MODEL_NAME} | ETA Improvement: ${ML_ETA_IMPROVEMENT}
            </div>
            <span class="footer-timestamp" id="footer-timestamp"></span>
        </div>
    `;

    // Update timestamp
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("footer-timestamp").textContent = `Last updated: ${timestamp}`;
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadRouteComparison();
    // Refresh every 30 seconds for real-time updates
    setInterval(loadRouteComparison, 30000);
});
