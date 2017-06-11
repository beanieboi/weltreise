function initMap() {
// Start the main app logic.
requirejs(
  ['app/map',
  'app/marker',
  'app/styles',
  'app/plannedRoute',
  'app/travelledRoute'], function (map, markerData, styles, planned_route, travelled_route) {

    var mapOptions = {
      zoom: 2,
      center: travelled_route[travelled_route.length-1],
      styles: styles
    }

    var map = new google.maps.Map(
      document.getElementById('map-canvas'),
      mapOptions
    );

    h = { coords: [0,0,1,], type: "circle" }

    var icon = {
      url: "/marker2.png", // url
      scaledSize: new google.maps.Size(50, 60), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(25, 60) // anchor
    };

    var photoIcon = {
      url: "/camera-icon.jpg", // url
      scaledSize: new google.maps.Size(30, 30), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(15, 15) // anchor
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

    var line = new google.maps.Polyline({
      path: travelled_route,
      strokeColor: "#8C00E8",
      strokeWeight: 2,
      geodesic: true,
      map: map
    });

    var line = new google.maps.Polyline({
      path: planned_route,
      strokeColor: "#8C00E8",
      strokeOpacity: 0.2,
      strokeWeight: 2,
      geodesic: true,
      map: map
    });
  });
}