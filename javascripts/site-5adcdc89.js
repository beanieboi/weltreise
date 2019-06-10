function requestJson(e,t){var n={},a=new XMLHttpRequest;a.open("GET",e,!0),a.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&(200==this.status&&(n=JSON.parse(this.responseText)),t(n))},a.send()}var detailed_route=[{location:new google.maps.LatLng(4.710989,-74.072092),stopover:!1},{location:new google.maps.LatLng(5.6365208,-73.5358133),stopover:!1},{location:new google.maps.LatLng(6.552555,-73.1374154),stopover:!1},{location:new google.maps.LatLng(6.6358495,-73.2277859),stopover:!1}],Feed={settings:{maxItemsCount:6,feedUrl:"/assets/static/tweets.json",feedDomEle:document.getElementById("feedJson")},init:function(){this.updateFeedContent(this.settings.feedUrl,this.settings.feedDomEle,this.settings.maxItemsCount)},updateFeedContent:function(e,t,n){requestJson(e,function(e){var a=t,r="",i=new Date;for(var s in e){var o=new Date(e[s].created_at),l="",g="",p="";if(o){l=o.getDate()+"."+(o.getMonth()+1)+"."+o.getFullYear();var m=(i.getTime()-o.getTime())/1e3/60/60,d=(i.getTime()-o.getTime())/1e3/60,c=Math.abs(Math.round(m)),u=Math.abs(Math.round(d));c<24&&(l="vor "+c+" Stunden"),1===c&&(l="vor "+c+" Stunde"),0===c&&(l="vor "+u+" Minuten")}var h="";e[s].latitude&&e[s].longitude&&(h='<a href="javascript:centerAndZoomMapTo('+e[s].latitude+", "+e[s].longitude+', 13, true)" class="location"></a>'),p='<img src="'+e[s].image_url+'" class="twitter-img">',s>=n&&(g="hidden",p='<img data-src="'+e[s].image_url+'" class="twitter-img">'),r+='<div id="'+e[s].id+'" class="feed-item '+g+'"><div class="image">'+p+h+'</div><div class="date">'+l+'</div><div class="copy"><img class="icon" src="/images/abwesend-adf34ac3.png" width="40" height="40">'+e[s].description+"</div></div>"}a.innerHTML=r})},onScroll:function(){var e=document.getElementById("feedJson");if(document.body.clientWidth<=700)var t=document.body.scrollHeight,n=document.body.scrollTop+window.innerHeight;else{document.getElementById("scrollInfo").style.display="none";var a=e.scrollTop,t=e.scrollHeight,r=e.offsetHeight,n=a+r}if(n>.9*t){var i=e.getElementsByClassName("hidden");if(0!==i.length){var s=i[0],o=s.getElementsByClassName("twitter-img");if(0!==o.length){var l=o[0].getAttribute("data-src");o[0].setAttribute("src",l)}s.classList.remove("hidden")}}}},savedMarker=[],travelled_route=[],gmap,MyMap={settings:{mapOptions:{center:new google.maps.LatLng(15.7504886,25.7576983),zoom:2,styles:styles},mapIcons:{circle:{url:"/images/circle-5fd85dad.png",scaledSize:new google.maps.Size(10,10),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(5,5)},icon:{url:"/images/point-71936f2b.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},photoIcon:{url:"/images/camera-dfee0739.png",scaledSize:new google.maps.Size(39,54),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(19,55)},locationIcon:{url:"/images/location_red-2a00507b.png",scaledSize:new google.maps.Size(35,47),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,47)}}},init:function(){gmap=new google.maps.Map(document.getElementById("map-canvas"),this.settings.mapOptions),this.addMarker(),this.updateTravelRoute(this.settings.mapIcons.circle,this.settings.mapIcons.icon)},updateTravelRoute:function(e){requestJson("/assets/static/polarsteps.json",function(t){for(var n in t){var a=t[n];travelled_route.push(new google.maps.LatLng(a.lat,a.lon))}for(var n in planned_route)var r=new google.maps.Marker({position:planned_route[n],map:gmap,icon:e});for(var n in travelled_route)var r=new google.maps.Marker({position:travelled_route[n],map:gmap,icon:e});new google.maps.Polyline({path:travelled_route,strokeColor:"#FFA455",strokeWeight:2,geodesic:!0,map:gmap}),new google.maps.Polyline({path:planned_route,strokeColor:"#FFA455",strokeOpacity:.2,strokeWeight:2,geodesic:!0,map:gmap})})},addMarker:function(){var e,t,n=new google.maps.InfoWindow;for(t=0;t<markerData.length;t++)e=new google.maps.Marker({position:markerData[t].position,map:gmap,icon:this.settings.mapIcons.photoIcon}),google.maps.event.addListener(e,"click",function(e,t){return function(){n.setContent(markerData[t].content),n.open(gmap,e)}}(e,t))},resize:function(){var e=gmap.getCenter();google.maps.event.trigger(gmap,"resize"),gmap.setCenter(e)},centerAndZoomMapTo:function(e,t,n,a){0!=savedMarker.length&&savedMarker.pop().setMap(null);var r=new google.maps.LatLng(e,t);if(gmap.panTo(r),gmap.setZoom(n),a){var i=new google.maps.Marker({position:r,map:gmap,icon:locationIcon});savedMarker.push(i)}},resetMap:function(){0!=savedMarker.length&&savedMarker.pop().setMap(null),gmap.setCenter(new google.maps.LatLng(15.7504886,25.7576983)),gmap.setZoom(2)}},markerData=[{title:"S\xe3o Miguel (Azoren)",position:new google.maps.LatLng(37.715727,-25.434506),content:"<b>S\xe3o Miguel (Azoren)</b><br/><br/>Erfahre mehr \xfcber unsere Zeit<br/> auf S\xe3o Miguel auf <a href='https://wir.abwesend.com/2017/07/weltreise-auftakt-sao-miguel-azoren/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/08/DJI_0089_preview-1.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"10 Highlights unserer Reise durch Kolumbien",position:new google.maps.LatLng(4.6323099,-74.0709709),content:"<b>10 Highlights unserer Reise durch Kolumbien</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Kolumbien auf <a href='https://wir.abwesend.com/2017/08/10-highlights-unserer-reise-durch-kolumbien/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/08/P8033785_preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Auf den Spuren der Inka in Peru",position:new google.maps.LatLng(-12.1205708,-77.0305231),content:"<b>Auf den Spuren der Inka in Peru</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Peru auf <a href='https://wir.abwesend.com/2017/09/auf-den-spuren-der-inka-in-peru/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/09/IMG_9503_preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Mit dem Camper durch die Atacamaw\xfcste von Chile",position:new google.maps.LatLng(-33.44463,-70.6464716),content:"<b>Mit dem Camper durch die Atacamaw\xfcste von Chile</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Chile auf <a href='https://wir.abwesend.com/2017/09/mit-dem-camper-durch-die-atacamawueste-von-chile/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/10/P9044484-1.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Buenos Aires, Patagonien und die Weiten Argentiniens",position:new google.maps.LatLng(-34.603684,-58.381559),content:"<b>Buenos Aires, Patagonien und die Weiten Argentiniens</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Argentinien auf <a href='https://wir.abwesend.com/2017/10/buenos-aires-pat\u2026ten-argentiniens/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2017/10/P9265060_preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Mit dem Camper durch das Land der Kiwis",position:new google.maps.LatLng(-36.84846,174.763332),content:"<b>Mit dem Camper durch das Land der Kiwis</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Neuseeland auf <a href='https://wir.abwesend.com/2017/11/mit-dem-camper-durch-das-land-der-kiwis/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2018/02/IMG_0799-preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Wir erkunden Japan mit dem Zug",position:new google.maps.LatLng(35.689488,139.691706),content:"<b>Wir erkunden Japan mit dem Zug</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Japan auf <a href='https://wir.abwesend.com/2018/01/wir-erkunden-japan-mit-dem-zug/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2018/01/Japan_preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Vietnam - mit Motorroller, Pho und Kaffee durch den Tag",position:new google.maps.LatLng(10.823099,106.629664),content:"<b>Vietnam - mit Motorroller, Pho und Kaffee durch den Tag</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Vietnam auf <a href='https://wir.abwesend.com/2018/01/vietnam-mit-motorroller-pho-und-kaffee-durch-den-tag/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2018/02/PC136239-preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Weihnachten bei Freunden in Indonesien",position:new google.maps.LatLng(-10.1748646,123.579613),content:"<b>Weihnachten bei Freunden in Indonesien</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Indonesien auf <a href='https://wir.abwesend.com/2018/02/weihnachten-bei-freunden-in-indonesien/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2018/02/PC296502-preview.jpg' width='200px' height='auto' class='marker-image'><br/>"},{title:"Unsere Reise durch Kerala - Das Land der Kokusnuss",position:new google.maps.LatLng(12.9542944,77.4905099),content:"<b>Unsere Reise durch Kerala - Das Land der Kokusnuss</b></br></br>Erfahre mehr \xfcber unsere Zeit<br/> in Indien auf <a href='https://wir.abwesend.com/2018/02/unsere-reise-durch-kerala-das-land-der-kokusnuss/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/><img src='https://wir.abwesend.com/wp-content/uploads/2018/02/P1176668-preview.jpg' width='200px' height='auto' class='marker-image'><br/>"}],planned_route=[],styles=[{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"},{saturation:-49},{lightness:60}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-93},{lightness:60}]},{featureType:"water",elementType:"all",stylers:[{lightness:22}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"on"},{saturation:-67},{lightness:49}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.country",elementType:"all",stylers:[{visibility:"on"},{lightness:60}]},{featureType:"all",elementType:"all",stylers:[]}];!function(){document.addEventListener("DOMContentLoaded",function(){Feed.init(),MyMap.init()}),window.onScrollFeed=Feed.onScroll,window.addEventListener("scroll",Feed.onScroll),window.addEventListener("resize",MyMap.resize),window.centerAndZoomMapTo=MyMap.centerAndZoomMapTo,window.resetMap=MyMap.resetMap}();