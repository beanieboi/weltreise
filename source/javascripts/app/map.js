function updateTravelRoute(map, circle, icon){
  var marker = new google.maps.Marker({
    position: travelled_route[travelled_route.length-1],
    map: map,
    icon: icon
  })

  map.setCenter(travelled_route[travelled_route.length-1]);

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

  window.resetMap = function() {
    if (savedMarker.length != 0) {
      savedMarker.pop().setMap(null);
    }
    map.panTo(travelled_route[travelled_route.length-1]);
    map.setZoom(3);
  }
}