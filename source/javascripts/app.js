(function() {
  document.addEventListener("DOMContentLoaded", function(event) {
    Feed.init();
    MyMap.init();
  });

  window.onScrollFeed = Feed.onScroll;
  window.addEventListener("scroll", Feed.onScroll);
  window.addEventListener("resize", MyMap.resize);
  window.centerAndZoomMapTo = MyMap.centerAndZoomMapTo;
  window.resetMap = MyMap.resetMap;
})();
