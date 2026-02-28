# Side Dashboard Implementation Guide

---
## IEEE ML Pipeline Update (February 26, 2026)
- Script: backend/eta_ml_pipeline.py
- Data: backend/trip_history_ml_ready.csv; STOP_DATA loaded from frontend/index.html
- Speed MAE: baseline 3.8504 km/h, XGBoost 2.6191 km/h (31.98% improvement)
- ETA MAE: baseline 187.0375 s, XGBoost 121.4031 s (35.09% improvement), Wilcoxon p=0.0
- Peak/off-peak ETA MAE: peak baseline 477.4938 s vs XGBoost 326.1945 s (31.69%); off-peak baseline 89.8007 s vs XGBoost 52.8446 s (41.15%)
- Outputs: backend/ml_results.csv and backend/ml_eta_results.csv

## Overview
A sliding side dashboard (drawer) has been integrated into your Smart Transit application. It appears on the left side of the map and automatically opens when users log in successfully.

## Features

### 1. **Automatic Dashboard**
- Opens automatically when a commuter logs in
- Displays booked tickets with bus information
- Beautiful slide-in animation from the left side

### 2. **Ticket Card Display**
Each ticket shows:
- Bus ID with status badge (Active/Inactive)
- Route information
- Number of reserved seats
- "Track Live" button for real-time monitoring
- "Cancel" button to remove the ticket

### 3. **Empty State**
When no tickets are available, displays a friendly message:
- 🎟️ Icon
- "No Active Tickets" message
- Helpful subtext

## JavaScript API

The dashboard is exposed via `window.Dashboard` object with the following methods:

### Open/Close Operations
```javascript
// Open the dashboard
window.Dashboard.open();

// Close the dashboard
window.Dashboard.close();

// Toggle the dashboard
window.Dashboard.toggle();
```

### Ticket Management
```javascript
// Add a ticket
window.Dashboard.addTicket(busId, route, seats, status);
// Example:
window.Dashboard.addTicket('102', 'Vellore - Katpadi', 2, 'active');

// Remove a specific ticket
window.Dashboard.removeTicket(ticketId);

// Clear all tickets
window.Dashboard.clearTickets();
```

### Tracking
```javascript
// Start live tracking for a bus
window.Dashboard.openTracking(busId);
// Example:
window.Dashboard.openTracking('102');
```

## Integration with Backend

To populate real tickets from your backend, modify the login success handler:

```javascript
// In applyAccessControl() function, replace the sample tickets with:
if (!isAdmin && window.Dashboard) {
  setTimeout(() => {
    window.Dashboard.open();
    window.Dashboard.clearTickets();
    
    // Fetch tickets from your backend
    fetch(`${API_BASE}/api/user/tickets`)
      .then(res => res.json())
      .then(tickets => {
        tickets.forEach(ticket => {
          window.Dashboard.addTicket(
            ticket.bus_id,
            ticket.route,
            ticket.reserved_seats,
            ticket.status
          );
        });
      })
      .catch(err => console.error('Failed to load tickets:', err));
  }, 500);
}
```

## Styling

The dashboard respects your application's theme:
- **Light Mode**: White background with blue header
- **Dark Mode**: Dark theme automatically applied via CSS variables

### Custom Styling
You can customize the appearance by modifying these CSS variables in the `:root` section:

```css
:root {
  --accent-color: #2563eb;  /* Change dashboard header color */
  --panel-bg-solid: #fbfcfe;  /* Change background color */
}
```

## User Interaction

1. **Open Dashboard**: 
   - Automatically opens on successful login
   - Can be programmatically opened via `window.Dashboard.open()`

2. **View Ticket Details**:
   - Click "Track Live" to begin live tracking of the bus
   - View route and seat information

3. **Cancel Ticket**:
   - Click "Cancel" button on any ticket card
   - Removes the ticket from the dashboard

4. **Close Dashboard**:
   - Click the ✕ (close) button in the header
   - Dashboard slides out to the left

## CSS Classes

Main dashboard elements:
- `.side-window` - Main container
- `.side-header` - Header with title and close button
- `.side-content` - Scrollable content area
- `.ticket-card` - Individual ticket container
- `.ticket-header` - Bus ID and status
- `.ticket-body` - Route and seat information
- `.ticket-footer` - Action buttons
- `.empty-state` - No tickets message

## Mobile Responsiveness

The dashboard is responsive:
- Desktop: Fixed width sidebar at 320px
- Mobile: Scales appropriately with the viewport
- Touch-friendly buttons and spacing

## Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Troubleshooting

### Dashboard not opening
- Ensure user is logged in as a commuter (not admin)
- Check browser console for errors (F12)
- Verify that `window.Dashboard` is initialized

### Tickets not displaying
- Use `window.Dashboard.addTicket()` to add tickets
- Check that ticket data is valid
- Verify API connection if fetching from backend

### Styling issues
- Check that CSS variables are properly defined
- Clear browser cache (Ctrl+Shift+Delete)
- Inspect elements with Browser DevTools (F12)

## Example Usage

```javascript
// In browser console
window.Dashboard.open();
window.Dashboard.addTicket('102', 'Vellore - Katpadi', 2, 'active');
window.Dashboard.addTicket('105', 'VIT Gate - Melvisharam', 1, 'active');
window.Dashboard.render();

// Start tracking a bus
window.Dashboard.openTracking('102');

// Close the dashboard
window.Dashboard.close();
```

## Future Enhancements

Potential improvements:
1. Real-time ticket updates from backend WebSocket
2. Ticket history and past journeys
3. Payment integration for ticket purchase
4. Notification badges for driver updates
5. QR code generation for offline boarding
6. Animated transitions for ticket operations
