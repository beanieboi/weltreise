var savedMarker = [],
  travelled_route = [],
  gmap,
  MyMap = {

  settings: {
    mapOptions: {
      center: new google.maps.LatLng(15.7504886,25.7576983),
      zoom: 2,
      styles: styles
    },
    mapIcons: {
      circle: {
        url: "/images/circle.png", // url
        scaledSize: new google.maps.Size(10, 10), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(5, 5) // anchor
      },
      icon: {
        url: "/images/point.png", // url
        scaledSize: new google.maps.Size(39, 54), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(19, 55) // anchor
      },
      photoIcon: {
        url: "/images/camera.png", // url
        scaledSize: new google.maps.Size(39, 54), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(19, 55) // anchor
      },
      locationIcon: {
        url: "/images/location_red.png", // url
        scaledSize: new google.maps.Size(35, 47), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(17, 47) // anchor
      }
    }
  },

  init: function() {

    gmap = new google.maps.Map(
      document.getElementById('map-canvas'),
      this.settings.mapOptions
    );

    this.addMarker();

    this.updateTravelRoute(
      this.settings.mapIcons.circle,
      this.settings.mapIcons.icon);
  },

  updateTravelRoute: function(circle, icon) {

    requestJson("https://weltreise.abwesend.com/s3/polarsteps.json", function(steps) {
      for (var index in steps) {
        var step = steps[index]

        travelled_route.push(
          new google.maps.LatLng(step["lat"], step["lon"])
        )
      }

      // var marker = new google.maps.Marker({
      //   position: travelled_route[travelled_route.length-1],
      //   map: gmap,
      //   icon: icon
      // })

      // gmap.setCenter(travelled_route[travelled_route.length-1]);

      for (var index in planned_route) {
        var pointMarker = new google.maps.Marker({
          position: planned_route[index],
          map: gmap,
          icon: circle
        });
      }

      for (var index in travelled_route) {
        var pointMarker = new google.maps.Marker({
          position: travelled_route[index],
          map: gmap,
          icon: circle
        });
      }

      var TravelledLine = new google.maps.Polyline({
        path: travelled_route,
        strokeColor: "#FFA455",
        strokeWeight: 2,
        geodesic: true,
        map: gmap
      });

      var PlannedLine = new google.maps.Polyline({
        path: planned_route,
        strokeColor: "#FFA455",
        strokeOpacity: 0.2,
        strokeWeight: 2,
        geodesic: true,
        map: gmap
      });

    });
  },

  addMarker: function() {
    var infoWindow = new google.maps.InfoWindow();
    var gMarker, i;

    for (i = 0; i < markerData.length; i++) {
      gMarker = new google.maps.Marker({
        position: markerData[i].position,
        map: gmap,
        icon: this.settings.mapIcons.photoIcon
      });
      google.maps.event.addListener(gMarker, 'click', (function(gMarker, i) {
        return function() {
          infoWindow.setContent(markerData[i].content);
          infoWindow.open(gmap, gMarker);
        }
      })(gMarker, i));
    }
  },

  resize: function(event) {
    var lastCenter = gmap.getCenter();
    google.maps.event.trigger(gmap, 'resize');
    gmap.setCenter(lastCenter);
  },

  centerAndZoomMapTo: function(lat, lng, zoom, setMarker) {
    // remove saved marker
    if (savedMarker.length != 0) {
      savedMarker.pop().setMap(null);
    }

    var location = new google.maps.LatLng(lat, lng);

    gmap.panTo(location);
    gmap.setZoom(zoom);

    if (setMarker) {
      var locationMarker = new google.maps.Marker({
        position: location,
        map: gmap,
        icon: locationIcon
      });
      savedMarker.push(locationMarker);
    }
  },

  resetMap: function() {
    if (savedMarker.length != 0) {
      savedMarker.pop().setMap(null);
    }
    gmap.setCenter(new google.maps.LatLng(15.7504886,25.7576983));
    gmap.setZoom(2);
  }
};
