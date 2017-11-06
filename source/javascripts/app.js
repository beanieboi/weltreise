document.addEventListener("DOMContentLoaded", function(event) {
  var mapOptions = {
  center: travelled_route[travelled_route.length-1],
  zoom: 7,
  styles: styles
}

var map = new google.maps.Map(
  document.getElementById('map-canvas'),
  mapOptions
);

var circle = {
  url: "/images/circle.png", // url
  scaledSize: new google.maps.Size(10, 10), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(5, 5) // anchor
};

var icon = {
  url: "/images/point.png", // url
  scaledSize: new google.maps.Size(39, 54), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(19, 55) // anchor
};

var photoIcon = {
  url: "/images/camera.png", // url
  scaledSize: new google.maps.Size(39, 54), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(19, 55) // anchor
};

var locationIcon = {
  url: "/images/location_red.png", // url
  scaledSize: new google.maps.Size(35, 47), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(17, 47) // anchor
};

var marker = new google.maps.Marker({
  position: travelled_route[travelled_route.length-1],
  map: map,
  icon: icon
})

var infoWindow = new google.maps.InfoWindow();
var gMarker, i;

for (i = 0; i < markerData.length; i++) {
  gMarker = new google.maps.Marker({
    position: markerData[i].position,
    map: map,
    icon: photoIcon
  });
  google.maps.event.addListener(gMarker, 'click', (function(gMarker, i) {
    return function() {
      infoWindow.setContent(markerData[i].content);
      infoWindow.open(map, gMarker);
    }
  })(gMarker, i));
}

for (var index in planned_route) {
  var pointMarker = new google.maps.Marker({
    position: planned_route[index],
    map: map,
    icon: circle
  });
}

for (var index in travelled_route) {
  var pointMarker = new google.maps.Marker({
    position: travelled_route[index],
    map: map,
    icon: circle
  });
}

var TravelledLine = new google.maps.Polyline({
  path: travelled_route,
  strokeColor: "#FFA455",
  strokeWeight: 2,
  geodesic: true,
  map: map
});

var PlannedLine = new google.maps.Polyline({
  path: planned_route,
  strokeColor: "#FFA455",
  strokeOpacity: 0.2,
  strokeWeight: 2,
  geodesic: true,
  map: map
});

var feedUrl = 'https://weltreise.abwesend.com/s3/weltreise-log.json';
updateFeedContent(feedUrl);

var savedMarker = [];
window.centerAndZoomMapTo = function(lat, lng, zoom, setMarker) {
  // remove saved marker
  if (savedMarker.length != 0) {
    savedMarker.pop().setMap(null);
  }

  var location = new google.maps.LatLng(lat, lng);

  map.panTo(location);
  map.setZoom(zoom);

  if (setMarker) {
    var locationMarker = new google.maps.Marker({
      position: location,
      map: map,
      icon: locationIcon
    });
    savedMarker.push(locationMarker);
  }
}

window.resetMap = function() {
  if (savedMarker.length != 0) {
    savedMarker.pop().setMap(null);
  }
  map.panTo(travelled_route[travelled_route.length-1]);
  map.setZoom(3);
}

var loadMoreContent = function(feedDiv, scrollHeight, contentHeight){
  // if the scroll is more than 90% from the top, load more content
  if( scrollHeight > contentHeight * 0.9) {
    // load content
    var hiddenItems = feedDiv.getElementsByClassName("hidden");
    if (hiddenItems.length !== 0) {
      var nextHiddenItem = hiddenItems[0];
      var image = nextHiddenItem.getElementsByClassName("twitter-img");
      if (image.length !== 0) {
        var src = image[0].getAttribute('data-src');
        image[0].setAttribute('src', src);
      }
      nextHiddenItem.classList.remove("hidden");
    }

  }
}

window.onscroll = function() {
  // mobile scroll
  if (document.body.clientWidth <= 700) {
    var feedDiv = document.getElementById("feedJson");
    var contentHeight = document.body.scrollHeight;
    var scrollHeight = document.body.scrollTop + window.innerHeight;

    loadMoreContent(feedDiv, scrollHeight, contentHeight);
  }
};

window.onScrollFeed = function() {
  // hide scroll hint
  var scrollInfo = document.getElementById("scrollInfo");
  scrollInfo.style.display = "none";
  var feedDiv = document.getElementById("feedJson");
  var scrollTop = feedDiv.scrollTop;
  var contentHeight = feedDiv.scrollHeight;
  var contentOffset = feedDiv.offsetHeight;
  var scrollHeight = scrollTop + contentOffset;

  loadMoreContent(feedDiv, scrollHeight, contentHeight);
}

window.addEventListener('resize', function(event){
  var lastCenter = map.getCenter();
  google.maps.event.trigger(map, 'resize');
  map.setCenter(lastCenter);
});

});

