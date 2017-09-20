document.addEventListener("DOMContentLoaded",function(){var e,o,n={center:travelled_route[travelled_route.length-1],zoom:7,styles:styles},t=new google.maps.Map(document.getElementById("map-canvas"),n),a={url:"images/circle.png",scaledSize:new google.maps.Size(10,10),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(5,5)},r={url:"images/point.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},l={url:"images/camera.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},i={url:"images/location_red.png",scaledSize:new google.maps.Size(35,47),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,47)},s=(new google.maps.Marker({position:travelled_route[travelled_route.length-1],map:t,icon:r}),new google.maps.InfoWindow);for(o=0;o<markerData.length;o++)e=new google.maps.Marker({position:markerData[o].position,map:t,icon:l}),google.maps.event.addListener(e,"click",function(e,o){return function(){s.setContent(markerData[o].content),s.open(t,e)}}(e,o));for(var g in planned_route)var p=new google.maps.Marker({position:planned_route[g],map:t,icon:a});for(var g in travelled_route)var p=new google.maps.Marker({position:travelled_route[g],map:t,icon:a});new google.maps.Polyline({path:travelled_route,strokeColor:"#FFA455",strokeWeight:2,geodesic:!0,map:t}),new google.maps.Polyline({path:planned_route,strokeColor:"#FFA455",strokeOpacity:.2,strokeWeight:2,geodesic:!0,map:t});getContent("https://s3.eu-central-1.amazonaws.com/weltreise-log/weltreise-log.json");var m=[];window.centerAndZoomMapTo=function(e,o,n,a){0!=m.length&&m.pop().setMap(null);var r=new google.maps.LatLng(e,o);if(t.panTo(r),t.setZoom(n),a){var l=new google.maps.Marker({position:r,map:t,icon:i});m.push(l)}},window.resetMap=function(){0!=m.length&&m.pop().setMap(null),t.panTo(travelled_route[travelled_route.length-1]),t.setZoom(3)};var d=function(e,o,n){if(o>.9*n){var t=e.getElementsByClassName("hidden");if(0!==t.length){var a=t[0],r=a.getElementsByClassName("twitter-img");if(0!==r.length){var l=r[0].getAttribute("data-src");r[0].setAttribute("src",l)}a.classList.remove("hidden")}}};window.onscroll=function(){if(document.body.clientWidth<=700){var e=document.getElementById("feedJson"),o=document.body.scrollHeight,n=document.body.scrollTop+window.innerHeight;d(e,n,o)}},window.onScrollFeed=function(){document.getElementById("scrollInfo").style.display="none";var e=document.getElementById("feedJson"),o=e.scrollTop,n=e.scrollHeight,t=e.offsetHeight;d(e,o+t,n)},window.addEventListener("resize",function(){var e=t.getCenter();google.maps.event.trigger(t,"resize"),t.setCenter(e)})});