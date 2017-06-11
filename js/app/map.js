function initMap() {
  styles = [
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        { visibility: "on" },
        { saturation: -49 },
        { lightness: 60 }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        { visibility: "on" },
        { saturation: -93 },
        { lightness: 60 }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        { lightness: 22 }
      ]
    },
    {
      featureType: "landscape.natural",
      elementType: "all",
      stylers: [
        { visibility: "on" },
        { saturation: -67 },
        { lightness: 49 }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        { visibility: "on" }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "all",
      stylers: [
        { visibility: "on" },
        { lightness: 60 }
      ]
    },
    {
      featureType: "all",
      elementType: "all",
      stylers: []
    }
  ]

  var planned_route = [
    new google.maps.LatLng(52.520007, 13.404954), // TXL
    new google.maps.LatLng(37.715727, -25.434506), // PDL
    new google.maps.LatLng(4.710989, -74.072092), // BOG
    new google.maps.LatLng(-11.838976, -76.751491), // LIM
    new google.maps.LatLng(-33.44889, -70.669266), // SCL
    new google.maps.LatLng(-34.603684, -58.381559), // EZE
    new google.maps.LatLng(-36.84846, 174.763332), // AUK
    new google.maps.LatLng(22.396428, 114.109497), // HKG
    new google.maps.LatLng(10.823099, 106.629664), // SGN
    new google.maps.LatLng(-6.17511, 106.86504), // JKT
    new google.maps.LatLng(35.689488, 139.691706), // NRT
    new google.maps.LatLng(22.396428, 114.109497), // HKG
    new google.maps.LatLng(12.971599, 77.594563), // BLR
    new google.maps.LatLng(31.945367, 35.928372), // AMM
    new google.maps.LatLng(52.520007, 13.404954) // TXL
  ]

  var travelled_route = [
    new google.maps.LatLng(52.520007, 13.404954), // TXL
    new google.maps.LatLng(37.715727, -25.434506), // PDL
  ]

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

  marker = new google.maps.Marker({
    position: travelled_route[travelled_route.length-1],
    map: map,
    icon: icon
  })

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
}