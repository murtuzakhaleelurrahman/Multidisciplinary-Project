# Enhanced Dashboard Guide - Modern Design Features

## 🎨 Design Overview

The dashboard now features a premium mobile-app inspired design with:
- **Glassmorphism Effect** - Frosted glass background with backdrop blur
- **Tracking Stepper/Timeline** - Visual journey progress indicator
- **Color Coding** - Green for on-time, orange/red for delays
- **Micro-interactions** - Smooth animations and hover effects
- **Occupancy Indicators** - Visual occupancy badges
- **Enhanced Typography** - Modern font hierarchy and spacing

## ✨ Key Features

### 1. **Glassmorphism Panel**
- Semi-transparent frosted glass background
- Smooth slide-in animation with bounce effect
- Responsive to dark/light theme
- Works seamlessly over the map

### 2. **Ticket Container Design**
Each ticket card includes:
- **Route Header** - Route label badge + destination
- **Occupancy Badge** - Color-coded bus capacity indicator
- **Tracking Stepper** - Visual journey timeline
- **Meta Information Grid** - 4-column layout with:
  - 🚌 Bus ID
  - ⏱️ ETA with status icon
  - 🪑 Reserved Seats
  - 📊 Status (Active/Delayed)
- **Action Buttons** - Live Location & SOS with icons

### 3. **Tracking Stepper/Timeline**
Shows the journey progress with:
- **Active Circle** - Green (completed upstream)
- **Current Stop** - Orange with pulse animation
- **Future Stop** - Gray (upcoming)
- **Connecting Lines**:
  - Solid for completed segments
  - Dotted for future segments
  - Labeled stops along the route

### 4. **Color Coding System**
```
🟢 Green (#10b981)    - On-time, active status
🟠 Orange (#f59e0b)   - Current location, medium occupancy
🔴 Red (#ef4444)      - Delayed, high occupancy
⚪ Gray (#d1d5db)     - Future stops
```

### 5. **Occupancy Badges**
```
0-50%   - Blue background    (Low occupancy)
51-79%  - Orange background  (Medium occupancy)
80-100% - Red background     (High occupancy)
```

## 📱 JavaScript API

### Enhanced Ticket Addition

```javascript
// Simple usage (auto-generates stepper)
window.Dashboard.addTicket(busId, route, seats, status);

// Enhanced usage with all options
window.Dashboard.addTicket(
  '102',                          // busId
  'Vellore Fort ➔ Katpadi',     // route (arrow separator)
  2,                              // seats reserved
  'active',                       // status: 'active' | 'delayed'
  {
    eta: '8 mins',               // Estimated time of arrival
    occupancy: 75,               // Bus occupancy percentage
    routeLabel: 'ROUTE 4A',      // Custom route label
    stepper: [                   // Journey progress (optional)
      { 
        label: 'Vellore Fort', 
        completed: true,         // Visited/completed
        current: false           // Currently at
      },
      { 
        label: 'Green Circle', 
        completed: false, 
        current: true            // Current location marker
      },
      { 
        label: 'Katpadi Junction', 
        completed: false, 
        current: false
      }
    ]
  }
);
```

### Dashboard Methods

```javascript
// Control visibility
window.Dashboard.open();           // Slide in from left
window.Dashboard.close();          // Slide out to left
window.Dashboard.toggle();         // Toggle open/closed

// Ticket management
window.Dashboard.addTicket(...);   // Add new ticket
window.Dashboard.removeTicket(id); // Remove specific ticket
window.Dashboard.clearTickets();   // Clear all tickets
window.Dashboard.render();         // Force re-render

// Open tracking
window.Dashboard.openTracking(busId); // Start live tracking
```

## 🎯 Usage Examples

### Example 1: Add Active On-Time Ticket
```javascript
window.Dashboard.addTicket(
  '102',
  'Vellore Fort ➔ Katpadi Junction',
  2,
  'active',
  {
    eta: '8 mins',
    occupancy: 75,
    routeLabel: 'ROUTE 4A',
    stepper: [
      { label: 'Vellore Fort', completed: true, current: false },
      { label: 'Green Circle', completed: false, current: true },
      { label: 'Katpadi Junction', completed: false, current: false }
    ]
  }
);
```

### Example 2: Add Delayed Ticket
```javascript
window.Dashboard.addTicket(
  '203',
  'CMH Road ➔ Vellore RS',
  1,
  'delayed',
  {
    eta: '15 mins',  // Delayed, longer ETA
    occupancy: 92,   // High occupancy
    routeLabel: 'ROUTE 5A'
  }
);
```

### Example 3: Fetch from Backend and Populate

```javascript
async function loadUserTickets() {
  try {
    const response = await fetch(`${API_BASE}/api/user/tickets`);
    const tickets = await response.json();
    
    window.Dashboard.clearTickets();
    window.Dashboard.open();
    
    tickets.forEach(ticket => {
      window.Dashboard.addTicket(
        ticket.bus_id,
        `${ticket.source} ➔ ${ticket.destination}`,
        ticket.seats_reserved,
        ticket.status,
        {
          eta: ticket.estimated_arrival,
          occupancy: ticket.occupancy_percent,
          routeLabel: ticket.route_code,
          stepper: ticket.journey_steps  // If provided by backend
        }
      );
    });
  } catch (error) {
    console.error('Failed to load tickets:', error);
  }
}

// Call after login
loadUserTickets();
```

## 🎨 CSS Customization

### Theme Colors
```css
/* Update in :root */
:root {
  --accent-color: #2563eb;        /* Primary gradient color */
  --panel-bg-solid: #fbfcfe;      /* Panel background */
}

/* Dark mode */
body.night-mode {
  --bg-color: #000;
  --panel-bg: rgba(20, 20, 20, 0.95);
  --panel-bg-solid: #1e293b;
  --text-color: #fff;
}
```

### Key CSS Classes

**Panel Elements:**
- `.side-window` - Main container
- `.side-window.active` - Open state
- `.side-header` - Title bar
- `.side-content` - Scrollable area

**Ticket Elements:**
- `.ticket-container` - Ticket wrapper
- `.route-info` - Source/destination section
- `.occupancy-badge` - Capacity indicator
- `.tracking-stepper` - Journey timeline
- `.step` - Single journey step
- `.circle` - Step indicator dot
- `.meta-item` - Info grid cells
- `.action-btn` - Call-to-action buttons

## 🎭 Animation Effects

1. **Panel Slide** - 0.4s cubic-bezier with bounce
2. **Card Hover** - translateY(-4px) lift effect
3. **Pulse Animation** - Current stop indicator pulses
4. **Float Animation** - Empty state icon floats
5. **Button Press** - Scale and transform on click

## 📊 Stepper Configuration

The tracking stepper auto-generates from route if not provided:
```javascript
// Input
route: 'Vellore ➔ Katpadi'

// Auto-generated stepper
stepper: [
  { label: 'Vellore', completed: true, current: false },
  { label: 'En Route', completed: false, current: true },
  { label: 'Katpadi', completed: false, current: false }
]
```

For custom routes with multiple stops, provide the full stepper array.

## 🎯 Backend Integration Checklist

- [ ] Create `/api/user/tickets` endpoint
- [ ] Return array with fields: `bus_id`, `route_code`, `source`, `destination`, `occupancy_percent`, `estimated_arrival`, `status`, `seats_reserved`
- [ ] Implement journey steps for tracking stepper (optional)
- [ ] Add status values: `'active'`, `'delayed'`, `'completed'`
- [ ] Calculate ETA in minutes (e.g., "8 mins", "15 mins")
- [ ] Return occupancy as percentage (0-100)

## 🌙 Dark Mode Support

Dashboard automatically adapts to theme:
- Light mode: White panel, blue header
- Dark mode: Dark gray panel, blue header
- Respects `body.night-mode` class

## 🚀 Performance Tips

1. **Limit Tickets** - Keep under 10 simultaneous tickets for smooth scrolling
2. **Update Sparingly** - Call `render()` only when data changes
3. **Use requestAnimationFrame** - For frequent updates from backend
4. **Lazy Load** - Fetch ticket details only when needed

## 🐛 Troubleshooting

### Dashboard not visible
- Check: `window.Dashboard` exists
- Verify: User is logged in as commuter
- Inspect: CSS classes applied correctly

### Tickets not rendering
- Check: `addTicket()` called with required parameters
- Verify: `render()` is called after adding tickets
- Inspect: Browser console for errors

### Stepper showing incorrectly
- Verify: Stepper array has odd number of items (steps + lines)
- Check: `completed` and `current` flags are boolean
- Ensure: Only one step has `current: true`

### Colors not showing
- Clear browser cache (Ctrl+Shift+Delete)
- Check: Dark mode class applied correctly
- Verify: Color values in CSS are correct

## 📚 Integration Examples

### With Monitoring System
```javascript
// When "Track Live" is clicked
window.Dashboard.openTracking = function(busId) {
  window.Dashboard.close();  // Close dashboard
  startMonitoring(busId);    // Start tracking
};
```

### Real-Time Updates
```javascript
// Simulate real-time updates
setInterval(() => {
  fetch(`${API_BASE}/api/user/tickets`)
    .then(res => res.json())
    .then(tickets => {
      // Update only if changed
      if (JSON.stringify(tickets) !== lastTickets) {
        window.Dashboard.clearTickets();
        // Re-populate...
      }
    });
}, 5000); // Every 5 seconds
```

## 🎨 Design Tokens

| Property | Value |
|----------|-------|
| Panel Width | 340px |
| Slide Duration | 0.4s |
| Border Radius | 15px |
| Shadow Small | 0 4px 20px rgba(0,0,0,0.08) |
| Shadow Large | 0 12px 32px rgba(0,0,0,0.15) |
| Transition | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Primary Color | #2563eb |
| Success Color | #10b981 |
| Warning Color | #f59e0b |
| Error Color | #ef4444 |

---

**Last Updated:** Feb 24, 2026
**Version:** 2.0 - Enhanced Design Edition
