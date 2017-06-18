function initMap() {
// Start the main app logic.
requirejs(
  ['app/styles',
  'app/marker',
  'app/plannedRoute',
  'app/travelledRoute'], function (styles, markerData, planned_route, travelled_route) {

    var mapOptions = {
      zoom: 3,
      center: travelled_route[travelled_route.length-1],
      styles: styles
    }

    var map = new google.maps.Map(
      document.getElementById('map-canvas'),
      mapOptions
    );

    h = { coords: [0,0,1,], type: "circle" }

    var icon = {
      url: "images/point.png", // url
      scaledSize: new google.maps.Size(39, 54), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(19, 55) // anchor
    };

    var photoIcon = {
      url: "images/camera.png", // url
      scaledSize: new google.maps.Size(39, 54), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(19, 55) // anchor
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
      var point = new google.maps.Circle({
        strokeColor: '#FFA455',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFA455',
        fillOpacity: 0.35,
        map: map,
        center: planned_route[index],
        radius: 50000
      });
    }

    var line = new google.maps.Polyline({
      path: travelled_route,
      strokeColor: "#FFA455",
      strokeWeight: 2,
      geodesic: true,
      map: map
    });

    var line = new google.maps.Polyline({
      path: planned_route,
      strokeColor: "#FFA455",
      strokeOpacity: 0.2,
      strokeWeight: 2,
      geodesic: true,
      map: map
    });

    window.centerMapTo = function(lat, lng) {
      map.setOptions({
        center: new google.maps.LatLng(lat, lng)
      });
    }
  });
}