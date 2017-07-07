// Start the main app logic.
requirejs(
  ['app/styles',
  'app/marker',
  'app/plannedRoute',
  'app/travelledRoute',
  'app/feed'], function (styles, markerData, planned_route, travelled_route, loadFeed) {

    var mapOptions = {
      zoom: 3,
      center: travelled_route[travelled_route.length-1],
      styles: styles
    }

    var map = new google.maps.Map(
      document.getElementById('map-canvas'),
      mapOptions
    );

    var circle = {
      url: "images/circle.png", // url
      scaledSize: new google.maps.Size(10, 10), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(5, 5) // anchor
    };

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

    var locationIcon = {
      url: "images/location_red.png", // url
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

    var feedUrl = 'https://s3.eu-central-1.amazonaws.com/weltreise-log/weltreise-log.json';
    loadFeed(feedUrl);

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
  });