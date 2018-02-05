function requestJson(e,t){var a={},n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&(200==this.status&&(a=JSON.parse(this.responseText)),t(a))},n.send()}var detailed_route=[{location:new google.maps.LatLng(4.710989,-74.072092),stopover:!1},{location:new google.maps.LatLng(5.6365208,-73.5358133),stopover:!1},{location:new google.maps.LatLng(6.552555,-73.1374154),stopover:!1},{location:new google.maps.LatLng(6.6358495,-73.2277859),stopover:!1}],Feed={settings:{maxItemsCount:6,feedUrl:"https://weltreise.abwesend.com/s3/weltreise-log.json",feedDomEle:document.getElementById("feedJson")},init:function(){this.updateFeedContent(this.settings.feedUrl,this.settings.feedDomEle,this.settings.maxItemsCount)},updateFeedContent:function(e,t,a){requestJson(e,function(e){var n=t,o="",i=new Date;for(var r in e){var s=new Date(e[r].created_at),l="",g="",p="";if(s){l=s.getDate()+"."+(s.getMonth()+1)+"."+s.getFullYear();var m=(i.getTime()-s.getTime())/1e3/60/60,d=(i.getTime()-s.getTime())/1e3/60,c=Math.abs(Math.round(m)),u=Math.abs(Math.round(d));c<24&&(l="vor "+c+" Stunden"),1===c&&(l="vor "+c+" Stunde"),0===c&&(l="vor "+u+" Minuten")}var h="";e[r].latitude&&e[r].longitude&&(h='<a href="javascript:centerAndZoomMapTo('+e[r].latitude+", "+e[r].longitude+', 13, true)" class="location"></a>'),p='<img src="'+e[r].image_url+'" class="twitter-img">',r>=a&&(g="hidden",p='<img data-src="'+e[r].image_url+'" class="twitter-img">'),o+='<div id="'+e[r].id+'" class="feed-item '+g+'"><div class="image">'+p+h+'</div><div class="date">'+l+'</div><div class="copy"><img class="icon" src="/images/abwesend-adf34ac3.png" width="40" height="40">'+e[r].description+"</div></div>"}n.innerHTML=o})},onScroll:function(){var e=document.getElementById("feedJson");if(document.body.clientWidth<=700)var t=document.body.scrollHeight,a=document.body.scrollTop+window.innerHeight;else{document.getElementById("scrollInfo").style.display="none";var n=e.scrollTop,t=e.scrollHeight,o=e.offsetHeight,a=n+o}if(a>.9*t){var i=e.getElementsByClassName("hidden");if(0!==i.length){var r=i[0],s=r.getElementsByClassName("twitter-img");if(0!==s.length){var l=s[0].getAttribute("data-src");s[0].setAttribute("src",l)}r.classList.remove("hidden")}}}},savedMarker=[],travelled_route=[],gmap,Map={settings:{mapOptions:{center:new google.maps.LatLng(31.977681,35.91189),zoom:7,styles:styles},mapIcons:{circle:{url:"/images/circle-5fd85dad.png",scaledSize:new google.maps.Size(10,10),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(5,5)},icon:{url:"/images/point-71936f2b.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},photoIcon:{url:"/images/camera-dfee0739.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},locationIcon:{url:"/images/location_red-2a00507b.png",scaledSize:new google.maps.Size(35,47),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,47)}}},init:function(){gmap=new google.maps.Map(document.getElementById("map-canvas"),this.settings.mapOptions),this.addMarker(),this.updateTravelRoute(this.settings.mapIcons.circle,this.settings.mapIcons.icon)},updateTravelRoute:function(e,t){requestJson("https://weltreise.abwesend.com/s3/polarsteps.json",function(a){for(var n in a){var o=a[n];travelled_route.push(new google.maps.LatLng(o.lat,o.lon))}new google.maps.Marker({position:travelled_route[travelled_route.length-1],map:gmap,icon:t});gmap.setCenter(travelled_route[travelled_route.length-1]);for(var n in planned_route)var i=new google.maps.Marker({position:planned_route[n],map:gmap,icon:e});for(var n in travelled_route)var i=new google.maps.Marker({position:travelled_route[n],map:gmap,icon:e});new google.maps.Polyline({path:travelled_route,strokeColor:"#FFA455",strokeWeight:2,geodesic:!0,map:gmap}),new google.maps.Polyline({path:planned_route,strokeColor:"#FFA455",strokeOpacity:.2,strokeWeight:2,geodesic:!0,map:gmap})})},addMarker:function(){var e,t,a=new google.maps.InfoWindow;for(t=0;t<markerData.length;t++)e=new google.maps.Marker({position:markerData[t].position,map:gmap,icon:this.settings.mapIcons.photoIcon}),google.maps.event.addListener(e,"click",function(e,t){return function(){a.setContent(markerData[t].content),a.open(gmap,e)}}(e,t))},resize:function(){var e=gmap.getCenter();google.maps.event.trigger(gmap,"resize"),gmap.setCenter(e)},centerAndZoomMapTo:function(e,t,a,n){0!=savedMarker.length&&savedMarker.pop().setMap(null);var o=new google.maps.LatLng(e,t);if(gmap.panTo(o),gmap.setZoom(a),n){var i=new google.maps.Marker({position:o,map:gmap,icon:locationIcon});savedMarker.push(i)}},resetMap:function(){0!=savedMarker.length&&savedMarker.pop().setMap(null),gmap.panTo(travelled_route[travelled_route.length-1]),gmap.setZoom(3)}},markerData=[{title:"S\xe3o Miguel (Azoren)",position:new google.maps.LatLng(37.715727,-25.434506),content:"<b>S\xe3o Miguel (Azoren)</b><br/><br/>Erfahre mehr \xfcber unsere Zeit<br/> auf S\xe3o Miguel in <a href='https://wir.abwesend.com/2017/07/weltreise-auftakt-sao-miguel-azoren/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/08/DJI_0089_preview-1.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"10 Highlights unserer Reise durch Kolumbien",position:new google.maps.LatLng(4.6323099,-74.0709709),content:"<b>10 Highlights unserer Reise durch Kolumbien</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Kolumbien in <a href='https://wir.abwesend.com/2017/08/10-highlights-unserer-reise-durch-kolumbien/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/08/P8033785_preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Auf den Spuren der Inka in Peru",position:new google.maps.LatLng(-12.1205708,-77.0305231),content:"<b>Auf den Spuren der Inka in Peru</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Peru in <a href='https://wir.abwesend.com/2017/09/auf-den-spuren-der-inka-in-peru/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/09/IMG_9503_preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Mit dem Camper durch die Atacamaw\xfcste von Chile",position:new google.maps.LatLng(-33.44463,-70.6464716),content:"<b>Mit dem Camper durch die Atacamaw\xfcste von Chile</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Chile in <a href='https://wir.abwesend.com/2017/09/mit-dem-camper-durch-die-atacamawueste-von-chile/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/10/P9044484-1.jpg' width='200px' height='auto' class='marker-image'><br/>"}],planned_route=[new google.maps.LatLng(31.945367,35.928372),new google.maps.LatLng(52.520007,13.404954)],styles=[{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"},{saturation:-49},{lightness:60}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-93},{lightness:60}]},{featureType:"water",elementType:"all",stylers:[{lightness:22}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"on"},{saturation:-67},{lightness:49}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.country",elementType:"all",stylers:[{visibility:"on"},{lightness:60}]},{featureType:"all",elementType:"all",stylers:[]}];!function(){document.addEventListener("DOMContentLoaded",function(){Feed.init(),Map.init()}),window.onScrollFeed=Feed.onScroll,window.addEventListener("scroll",Feed.onScroll),window.addEventListener("resize",Map.resize),window.centerAndZoomMapTo=Map.centerAndZoomMapTo,window.resetMap=Map.resetMap}();