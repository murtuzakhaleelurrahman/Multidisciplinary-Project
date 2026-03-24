# PHASE 3 QUICK REFERENCE GUIDE

## For Developers: How Phase 3 Works

### 1. What Changed?
The Smart Transit route comparison UI now displays transparent indicators showing when each route uses:
- 🤖 **Full ML** (Green) - Machine learning optimized
- 🤖 **Hybrid ML** (Orange) - Partial machine learning (some segments used fallback)
- ⚙️ **Fallback** (Purple) - Fixed-speed deterministic estimates

### 2. How to Trigger Phase 3 Indicators

Your API response must include a `mode` field in each route:

```javascript
{
  fastest_route: "ROUTE_A",
  routes: [
    {
      route_id: "ROUTE_A",
      eta_minutes: 12,
      mode: "ml",  // <- THIS FIELD IS REQUIRED
      reliability_score: 0.85,
      // ... other fields
    }
  ]
}
```

**Valid mode values:**
- `"ml"` → Full ML prediction (green badge, no warning)
- `"ml-hybrid"` or `"hybrid"` → Partial ML (orange badge, hybrid warning)
- `"fallback"` or `"fallback-deterministic"` → No ML (purple badge, fallback warning)

### 3. Warning Messages

**Fallback Warning** (Red, when mode="fallback"):
```
⚠️ Using fallback model (fixed speed estimate)
```

**Hybrid Warning** (Orange, when mode="ml-hybrid"):
```
⚠️ Partial ML prediction (some segments used fallback)
```

**Full ML** (Green, when mode="ml"):
```
No warning displayed
```

### 4. Where Warnings Appear

**In Route Cards** (Below header, above ETA):
```
[ROUTE_A] ⭐ Fastest [🤖 ml]
⚠️ [warning text if fallback/hybrid]
[ETA: 12 min]
```

**In Recommendation Banner** (Between reason and confidence):
```
Best Route: ROUTE_A
[ETA: 12 min] [Saves 5 min ⚡]
💡 Route A offers best balance...
⚠️ [warning text if fastest route uses fallback/hybrid]
[Confidence Bar: 85%]
```

### 5. CSS classes Added (for Phase 3)

```css
/* Warning container styling */
.prediction-mode-warning { ... }

/* Color variants */
.prediction-mode-warning.fallback-warning { ... }  /* Red gradient */
.prediction-mode-warning.hybrid-warning { ... }    /* Orange gradient */

/* Banner-level warnings (larger) */
.recommendation-mode-warning { ... }
.recommendation-mode-warning.fallback-warning { ... }
.recommendation-mode-warning.hybrid-warning { ... }
```

### 6. JavaScript Code Paths

**File**: frontend/route-comparison.js

**Function 1**: `renderRecommendation(data)` (Line 311)
```javascript
// Checks fastestRoute.mode
if (mode === "fallback") → predictionModeNote = red warning HTML
if (mode === "ml-hybrid") → predictionModeNote = orange warning HTML
// predictionModeNote inserted in recommendation card HTML
```

**Function 2**: `renderRoutes(routes, fastestRoute)` (Line 650)
```javascript
// For each route, checks route.mode
if (route.mode === "fallback") → modeBadgeClass = 'mode-fallback', warning HTML created
if (route.mode === "ml-hybrid") → modeBadgeClass = 'mode-hybrid', warning HTML created
// modeBadgeClass applied to badge, predictionModeWarning inserted in card
```

### 7. Testing Phase 3

**Test Data Structure**:
```javascript
const testData = {
  fastest_route: "ROUTE_A",
  eta_difference_minutes: 5,
  decision_reason: "Best balance of speed and reliability",
  routes: [
    { route_id: "ROUTE_A", eta_minutes: 12, mode: "ml", reliability_score: 0.85 },
    { route_id: "ROUTE_B", eta_minutes: 15, mode: "ml-hybrid", reliability_score: 0.68 },
    { route_id: "ROUTE_C", eta_minutes: 18, mode: "fallback", reliability_score: 0.45 }
  ]
};
```

**Expected Results**:
- ✅ ROUTE_A: Green badge, NO warning
- ✅ ROUTE_B: Orange badge → "⚠️ Partial ML prediction..."
- ✅ ROUTE_C: Purple badge → "⚠️ Using fallback model..."
- ✅ Recommendation banner: Since ROUTE_A uses full ML, NO warning

### 8. Color Coding Reference

| Element | ML | Hybrid | Fallback |
|---------|-----|--------|----------|
| Badge Background | Blue (#e3f2fd) | Green (#e8f5e9) | Purple (#f3e5f5) |
| Badge Text Color | Dark Blue (#1565c0) | Dark Green (#2e7d32) | Dark Purple (#6a1b9a) |
| Warning Background | - | Orange (#fffbeb→#fef3c7) | Red (#fef2f2→#fee2e2) |
| Warning Border | - | #f59e0b | #dc2626 |
| Warning Text Color | - | #92400e | #991b1b |

### 9. Troubleshooting

**Problem**: Warnings not appearing
- ✅ Check API response includes `mode` field
- ✅ Check mode value is one of valid values above
- ✅ Check console for errors (Ctrl+Shift+J)
- ✅ Try with fallback/hybrid data to verify functionality

**Problem**: Warnings with wrong color
- ✅ Check mode field spelling (case-sensitive)
- ✅ Verify CSS file has Phase 3 styling (search for "PREDICTION MODE WARNINGS")
- ✅ Clear browser cache (Ctrl+Shift+Delete)

**Problem**: Badge showing wrong emoji
- ✅ renderRoutes() sets emoji based on mode: 🤖 for ML, ⚙️ for fallback
- ✅ Check route.mode value in API response

**Problem**: Recommendation banner warning missing
- ✅ Check fastest_route mode field
- ✅ Verify renderRecommendation() receives complete data object
- ✅ Check console for validation errors

### 10. Performance Notes

- ✅ No performance impact: Mode detection is simple string comparison
- ✅ No additional API calls needed
- ✅ CSS gradients are GPU-accelerated
- ✅ ~2KB total additional file size

### 11. Backward Compatibility

✅ If `mode` field not in API response:
- System defaults to `"ml"` mode
- No warnings displayed (assumes full ML)
- No errors thrown

### 12. Future Customization Points

If you want to modify Phase 3 behavior:

**Change warning text**:
- Edit renderRecommendation() line ~313 & 319
- Edit renderRoutes() line ~655 & 661

**Change colors**:
- Edit route-style.css fallback-warning/hybrid-warning classes (~1093, 1110)

**Change warning visibility**:
- Edit condition logic in mode detection blocks
- Examples: Only show fallback warning on high-confidence routes

**Add tooltip explanations**:
- Add title attribute to warning-text spans
- Render tooltip on hover event

### 13. Integration Checklist

Before deploying Phase 3:
- [ ] Backend API includes `mode` field
- [ ] Backend `mode` values are: "ml", "ml-hybrid", "fallback", "fallback-deterministic"
- [ ] route-comparison.js is deployed
- [ ] route-style.css includes Phase 3 CSS (search for "PREDICTION MODE WARNINGS")
- [ ] route-comparison.html has no custom CSS overrides
- [ ] Browser cache cleared for testing
- [ ] Test with all three mode types

### 14. Support Resources

**Files to Review**:
1. PHASE3_IMPLEMENTATION_SUMMARY.md - Technical deep dive
2. PHASE3_TEST_DATA.js - Test data examples
3. PHASE3_VERIFICATION.md - Quality assurance report
4. This guide - Quick reference

**Key Functions**:
1. renderRecommendation() - Handles recommendation card banner warning
2. renderRoutes() - Handles individual route card warnings

**Key Styling**:
1. .prediction-mode-warning - Base warning styling
2. .fallback-warning - Red gradient styling
3. .hybrid-warning - Orange gradient styling

---

**Ready to deploy? ✅ Check the integration checklist above and you're good to go!**
