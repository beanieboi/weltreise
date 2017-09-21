function getContent(e){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE&&200==this.status){var e=JSON.parse(this.responseText),n=document.getElementById("feedJson"),t="",o=new Date;for(var a in e){var g=new Date(e[a].created_at),s="",l="",i="";if(g){s=g.getDate()+"."+(g.getMonth()+1)+"."+g.getFullYear();var r=(o.getTime()-g.getTime())/1e3/60/60,p=(o.getTime()-g.getTime())/1e3/60,m=Math.abs(Math.round(r)),L=Math.abs(Math.round(p));m<24&&(s="vor "+m+" Stunden"),1===m&&(s="vor "+m+" Stunde"),0===m&&(s="vor "+L+" Minuten")}var w="";e[a].latitude&&e[a].longitude&&(w='<a href="javascript:centerAndZoomMapTo('+e[a].latitude+", "+e[a].longitude+', 13, true)" class="location"></a>'),i='<img src="'+e[a].image_url+'" class="twitter-img">',a>=6&&(l="hidden",i='<img data-src="'+e[a].image_url+'" class="twitter-img">'),t+='<div id="'+e[a].id+'" class="feed-item '+l+'"><div class="image">'+i+w+'</div><div class="date">'+s+'</div><div class="copy"><img class="icon" src="images/abwesend.png" width="40" height="40">'+e[a].description+"</div></div>"}n.innerHTML=t}},n.send()}var detailed_route=[{location:new google.maps.LatLng(4.710989,-74.072092),stopover:!1},{location:new google.maps.LatLng(5.6365208,-73.5358133),stopover:!1},{location:new google.maps.LatLng(6.552555,-73.1374154),stopover:!1},{location:new google.maps.LatLng(6.6358495,-73.2277859),stopover:!1}],markerData=[{title:"S\xe3o Miguel (Azoren)",position:new google.maps.LatLng(37.715727,-25.434506),content:"<b>S\xe3o Miguel (Azoren)</b><br/><br/>Erfahre mehr \xfcber unsere Zeit<br/> auf S\xe3o Miguel in <a href='https://wir.abwesend.com/2017/07/weltreise-auftakt-sao-miguel-azoren/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/08/DJI_0089_preview-1.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"10 Highlights unserer Reise durch Kolumbien",position:new google.maps.LatLng(4.6323099,-74.0709709),content:"<b>10 Highlights unserer Reise durch Kolumbien</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Kolumbien in <a href='https://wir.abwesend.com/2017/08/10-highlights-unserer-reise-durch-kolumbien/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/08/P8033785_preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Auf den Spuren der Inka in Peru",position:new google.maps.LatLng(-12.1205708,-77.0305231),content:"<b>Auf den Spuren der Inka in Peru</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Peru in <a href='https://wir.abwesend.com/2017/09/auf-den-spuren-der-inka-in-peru/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/09/IMG_9503_preview.jpg' width='200px' height='auto' class='marker-image'><br/>"}],planned_route=[new google.maps.LatLng(52.520007,13.404954),new google.maps.LatLng(38.722252,-9.139337),new google.maps.LatLng(37.715727,-25.434506),new google.maps.LatLng(4.6884212,-74.1324184),new google.maps.LatLng(-12.1205708,-77.0305231),new google.maps.LatLng(-33.44889,-70.669266),new google.maps.LatLng(-34.603684,-58.381559),new google.maps.LatLng(-36.84846,174.763332),new google.maps.LatLng(22.396428,114.109497),new google.maps.LatLng(10.823099,106.629664),new google.maps.LatLng(-6.17511,106.86504),new google.maps.LatLng(35.689488,139.691706),new google.maps.LatLng(22.396428,114.109497),new google.maps.LatLng(12.971599,77.594563),new google.maps.LatLng(31.945367,35.928372),new google.maps.LatLng(52.520007,13.404954)],styles=[{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"},{saturation:-49},{lightness:60}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-93},{lightness:60}]},{featureType:"water",elementType:"all",stylers:[{lightness:22}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"on"},{saturation:-67},{lightness:49}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.country",elementType:"all",stylers:[{visibility:"on"},{lightness:60}]},{featureType:"all",elementType:"all",stylers:[]}],travelled_route=[new google.maps.LatLng(52.520007,13.404954),new google.maps.LatLng(38.7755978,-9.1375554),new google.maps.LatLng(37.714653,-25.436105),new google.maps.LatLng(4.6323099,-74.0709709),new google.maps.LatLng(5.63004,-73.5276174),new google.maps.LatLng(6.5528628,-73.1380154),new google.maps.LatLng(6.6319714,-73.2284217),new google.maps.LatLng(7.0883153,-73.1316287),new google.maps.LatLng(6.2589277,-75.5661843),new google.maps.LatLng(4.636689,-75.5731589),new google.maps.LatLng(4.5277801,-75.6860379),new google.maps.LatLng(4.6884212,-74.1324184),new google.maps.LatLng(-12.1205708,-77.0305231),new google.maps.LatLng(-13.5206948,-71.9860507),new google.maps.LatLng(-13.2583316,-72.2650749),new google.maps.LatLng(-13.1546372,-72.5290346),new google.maps.LatLng(-13.2583316,-72.2650749),new google.maps.LatLng(-13.5197274,-71.9728156),new google.maps.LatLng(-15.8416623,-70.0293238),new google.maps.LatLng(-16.4042796,-71.5393331),new google.maps.LatLng(-14.0874996,-75.764203),new google.maps.LatLng(-12.1205708,-77.0305231),new google.maps.LatLng(-33.4082432,-70.7931465),new google.maps.LatLng(-18.4533494,-70.3572419),new google.maps.LatLng(-18.2498894,-69.2178395),new google.maps.LatLng(-19.594995,-70.2129502),new google.maps.LatLng(-22.3483511,-69.5683855),new google.maps.LatLng(-22.8982583,-68.1942362),new google.maps.LatLng(-23.340757,-69.856263),new google.maps.LatLng(-24.86263,-70.38344),new google.maps.LatLng(-26.39774,-70.69719),new google.maps.LatLng(-28.464412,-71.221189),new google.maps.LatLng(-29.9351589,-71.2966333),new google.maps.LatLng(-30.0304499,-70.7234345),new google.maps.LatLng(-29.9351589,-71.2966333),new google.maps.LatLng(-33.050631,-71.646068),new google.maps.LatLng(-33.398675,-71.12338),new google.maps.LatLng(-33.44463,-70.6464716),new google.maps.LatLng(-34.5953638,-58.4139765)];document.addEventListener("DOMContentLoaded",function(){var e,n,t={center:travelled_route[travelled_route.length-1],zoom:7,styles:styles},o=new google.maps.Map(document.getElementById("map-canvas"),t),a={url:"images/circle.png",scaledSize:new google.maps.Size(10,10),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(5,5)},g={url:"images/point.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},s={url:"images/camera.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},l={url:"images/location_red.png",scaledSize:new google.maps.Size(35,47),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,47)},i=(new google.maps.Marker({position:travelled_route[travelled_route.length-1],map:o,icon:g}),new google.maps.InfoWindow);for(n=0;n<markerData.length;n++)e=new google.maps.Marker({position:markerData[n].position,map:o,icon:s}),google.maps.event.addListener(e,"click",function(e,n){return function(){i.setContent(markerData[n].content),i.open(o,e)}}(e,n));for(var r in planned_route)var p=new google.maps.Marker({position:planned_route[r],map:o,icon:a});for(var r in travelled_route)var p=new google.maps.Marker({position:travelled_route[r],map:o,icon:a});new google.maps.Polyline({path:travelled_route,strokeColor:"#FFA455",strokeWeight:2,geodesic:!0,map:o}),new google.maps.Polyline({path:planned_route,strokeColor:"#FFA455",strokeOpacity:.2,strokeWeight:2,geodesic:!0,map:o});getContent("https://weltreise.abwesend.com/s3/weltreise-log.json");var m=[];window.centerAndZoomMapTo=function(e,n,t,a){0!=m.length&&m.pop().setMap(null);var g=new google.maps.LatLng(e,n);if(o.panTo(g),o.setZoom(t),a){var s=new google.maps.Marker({position:g,map:o,icon:l});m.push(s)}},window.resetMap=function(){0!=m.length&&m.pop().setMap(null),o.panTo(travelled_route[travelled_route.length-1]),o.setZoom(3)};var L=function(e,n,t){if(n>.9*t){var o=e.getElementsByClassName("hidden");if(0!==o.length){var a=o[0],g=a.getElementsByClassName("twitter-img");if(0!==g.length){var s=g[0].getAttribute("data-src");g[0].setAttribute("src",s)}a.classList.remove("hidden")}}};window.onscroll=function(){if(document.body.clientWidth<=700){var e=document.getElementById("feedJson"),n=document.body.scrollHeight,t=document.body.scrollTop+window.innerHeight;L(e,t,n)}},window.onScrollFeed=function(){document.getElementById("scrollInfo").style.display="none";var e=document.getElementById("feedJson"),n=e.scrollTop,t=e.scrollHeight,o=e.offsetHeight;L(e,n+o,t)},window.addEventListener("resize",function(){var e=o.getCenter();google.maps.event.trigger(o,"resize"),o.setCenter(e)})});