var savedMarker=[],travelled_route=[],gmap,Map={settings:{mapOptions:{center:new google.maps.LatLng(12.95396,77.4908538),zoom:7,styles:styles},mapIcons:{circle:{url:"/images/circle-5fd85dad.png",scaledSize:new google.maps.Size(10,10),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(5,5)},icon:{url:"/images/point-71936f2b.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},photoIcon:{url:"/images/camera-dfee0739.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},locationIcon:{url:"/images/location_red-2a00507b.png",scaledSize:new google.maps.Size(35,47),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,47)}}},init:function(){gmap=new google.maps.Map(document.getElementById("map-canvas"),this.settings.mapOptions),this.addMarker(),this.updateTravelRoute(this.settings.mapIcons.circle,this.settings.mapIcons.icon)},updateTravelRoute:function(e,o){requestJson("https://weltreise.abwesend.com/s3/polarsteps.json",function(a){for(var n in a){var t=a[n];travelled_route.push(new google.maps.LatLng(t.lat,t.lon))}new google.maps.Marker({position:travelled_route[travelled_route.length-1],map:gmap,icon:o});gmap.setCenter(travelled_route[travelled_route.length-1]);for(var n in planned_route)var r=new google.maps.Marker({position:planned_route[n],map:gmap,icon:e});for(var n in travelled_route)var r=new google.maps.Marker({position:travelled_route[n],map:gmap,icon:e});new google.maps.Polyline({path:travelled_route,strokeColor:"#FFA455",strokeWeight:2,geodesic:!0,map:gmap}),new google.maps.Polyline({path:planned_route,strokeColor:"#FFA455",strokeOpacity:.2,strokeWeight:2,geodesic:!0,map:gmap})})},addMarker:function(){var e,o,a=new google.maps.InfoWindow;for(o=0;o<markerData.length;o++)e=new google.maps.Marker({position:markerData[o].position,map:gmap,icon:this.settings.mapIcons.photoIcon}),google.maps.event.addListener(e,"click",function(e,o){return function(){a.setContent(markerData[o].content),a.open(gmap,e)}}(e,o))},resize:function(){var e=gmap.getCenter();google.maps.event.trigger(gmap,"resize"),gmap.setCenter(e)},centerAndZoomMapTo:function(e,o,a,n){0!=savedMarker.length&&savedMarker.pop().setMap(null);var t=new google.maps.LatLng(e,o);if(gmap.panTo(t),gmap.setZoom(a),n){var r=new google.maps.Marker({position:t,map:gmap,icon:locationIcon});savedMarker.push(r)}},resetMap:function(){0!=savedMarker.length&&savedMarker.pop().setMap(null),gmap.panTo(travelled_route[travelled_route.length-1]),gmap.setZoom(3)}};