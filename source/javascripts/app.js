(function () {

  document.addEventListener("DOMContentLoaded", function(event) {
    Feed.init();
    Map.init();
  });

  window.onScrollFeed = Feed.onScroll;
  window.addEventListener('scroll', Feed.onScroll);
  window.addEventListener('resize', Map.resize);
  window.centerAndZoomMapTo = Map.centerAndZoomMapTo;
  window.resetMap = Map.resetMap;
})();
