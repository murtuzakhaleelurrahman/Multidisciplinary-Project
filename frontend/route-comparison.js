const API_BASE = "https://bus-tracking-and-occupancy-system.onrender.com";

async function loadRouteComparison() {
    try {
        const response = await fetch(`${API_BASE}/api/routes/compare`);
        const data = await response.json();

        renderBanner(data);
        renderRoutes(data.routes);
        renderFooter();

    } catch (err) {
        console.error("Error loading routes:", err);
    }
}

function renderBanner(data) {
    const banner = document.getElementById("decision-banner");

    banner.innerHTML = `
        <h2>Fastest Route: ${data.fastest_route}</h2>
        <h1>${data.routes[0].eta_minutes} Minutes</h1>
        <p>Saves ${data.eta_difference_minutes} Minutes Over Alternative</p>
    `;
}

function renderRoutes(routes) {
    const container = document.getElementById("routes-container");
    container.innerHTML = "";

    routes.forEach(route => {
        const congestionClass =
            route.congestion_level === "free_flow" ? "congestion-free" :
            route.congestion_level === "heavy" ? "congestion-heavy" :
            "congestion-moderate";

        const card = document.createElement("div");
        card.className = "route-card";

        card.innerHTML = `
            <h3>${route.route_id}</h3>
            <p><strong>ETA:</strong> ${route.eta_minutes} min</p>
            <p><strong>Baseline:</strong> ${route.baseline_eta_minutes} min</p>
            <p><strong>ML Improvement:</strong> ${route.ml_improvement_minutes} min</p>
            <p><strong>Avg Speed:</strong> ${route.average_speed_kmh} km/h</p>
            <p><strong>Congestion:</strong> 
                <span class="${congestionClass}">
                    ${route.congestion_level}
                </span>
            </p>
            <p><strong>Reliability:</strong> ${route.reliability_score}</p>
            <p><strong>Mode:</strong> ${route.mode}</p>
        `;

        container.appendChild(card);
    });
}

function renderFooter() {
    const footer = document.getElementById("system-footer");
    footer.innerHTML = `
        ML-Powered ETA System | Real-Time Route Intelligence
    `;
}

loadRouteComparison();
