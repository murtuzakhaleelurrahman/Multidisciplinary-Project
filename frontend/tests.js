// Smart Transit – Unit Tests (lightweight, run in browser)
(function(){
  console.group("Smart Transit – Unit Tests");
  try {
    // computeWeightedETA basic math
    console.assert(typeof window.computeWeightedETA === 'function', "computeWeightedETA should be a function");
    if (typeof window.computeWeightedETA === 'function') {
      const eta = window.computeWeightedETA(1000, 20, false);
      console.assert(eta === 3, "ETA math failed: 1km @ 20km/h should be 3 minutes");
      const etaStale = window.computeWeightedETA(1000, null, true);
      console.assert(etaStale > 3, "Stale data should increase ETA");
    }

    // calculateRouteLegProgress sanity
    console.assert(typeof window.calculateRouteLegProgress === 'function', "calculateRouteLegProgress should be a function");
    if (typeof window.calculateRouteLegProgress === 'function') {
      var sid = (window.STOP_DATA && window.STOP_DATA[0] && window.STOP_DATA[0].stop_id) || null;
      if (sid) {
        var s = window.STOP_DATA[0];
        var res = window.calculateRouteLegProgress(s.latitude, s.longitude, sid);
        console.assert(res && res.progress >= 5, "Progress must not be < 5%");
      } else {
        console.assert(true, "No STOP_DATA available; skipping leg progress test");
      }
    }

    // pickBestBusForStop alias exists
    console.assert(typeof window.pickBestBusForStop === 'function', "pickBestBusForStop should exist (alias to findBestBusForStop)");

    // DelayReporting.reportDelay increments
    console.assert(window.DelayReporting && typeof window.DelayReporting.reportDelay === 'function', "DelayReporting.reportDelay should be a function");
    if (window.DelayReporting && typeof window.DelayReporting.reportDelay === 'function') {
      var before = (window.state && window.state.delayReports && window.state.delayReports.get("BUS-UT-1")) || { count: 0 };
      var c1 = window.DelayReporting.reportDelay("BUS-UT-1");
      var after1 = (window.state.delayReports.get("BUS-UT-1") || { count: 0 }).count;
      console.assert(after1 >= before.count + 1 && c1 === after1, "Delay report count should increment and return count");
    }
  } catch (e) {
    console.error("Unit test error:", e);
  }
  console.groupEnd();
})();
