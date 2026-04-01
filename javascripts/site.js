var detailed_route = [
  { location: new google.maps.LatLng(4.710989, -74.072092), stopover: false }, // BOG, CO
  { location: new google.maps.LatLng(5.6365208, -73.5358133), stopover: false }, // Villa de Leyva, CO
  { location: new google.maps.LatLng(6.552555, -73.1374154), stopover: false }, // San Gil, CO
  { location: new google.maps.LatLng(6.6358495, -73.2277859), stopover: false }, // Barichara, CO
];

var styles = [
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [{ visibility: "on" }, { saturation: -49 }, { lightness: 60 }],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [{ visibility: "on" }, { saturation: -93 }, { lightness: 60 }],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [{ lightness: 22 }],
  },
  {
    featureType: "landscape.natural",
    elementType: "all",
    stylers: [{ visibility: "on" }, { saturation: -67 }, { lightness: 49 }],
  },
  {
    featureType: "poi.park",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "administrative.country",
    elementType: "all",
    stylers: [{ visibility: "on" }, { lightness: 60 }],
  },
  {
    featureType: "all",
    elementType: "all",
    stylers: [],
  },
];
var planned_route = [
  // new google.maps.LatLng(52.520007, 13.404954), // TXL
  // new google.maps.LatLng(38.722252, -9.139337), // LIS
  // new google.maps.LatLng(37.715727, -25.434506), // PDL
  // new google.maps.LatLng(4.6884212,-74.1324184), // BOG
  // new google.maps.LatLng(-12.1205708,-77.0305231), // LIM
  // new google.maps.LatLng(-33.44889, -70.669266), // SCL
  // new google.maps.LatLng(-34.603684, -58.381559), // EZE
  // new google.maps.LatLng(-36.84846, 174.763332), // AUK
  // new google.maps.LatLng(22.396428, 114.109497), // HKG
  // new google.maps.LatLng(35.689488, 139.691706), // NRT
  // new google.maps.LatLng(10.823099, 106.629664), // SGN
  // new google.maps.LatLng(-6.17511, 106.86504), // JKT
  // new google.maps.LatLng(22.396428, 114.109497), // HKG
  // new google.maps.LatLng(19.088200, 72.865598), // BOM
  //new google.maps.LatLng(31.945367, 35.928372), // AMM
  //new google.maps.LatLng(52.520007, 13.404954) // TXL
];
var markerData = [
  {
    title: "São Miguel (Azoren)",
    position: new google.maps.LatLng(37.715727, -25.434506),
    content:
      "<b>São Miguel (Azoren)</b><br/><br/>" +
      "Erfahre mehr über unsere Zeit<br/> auf São Miguel auf " +
      "<a href='https://wir.abwesend.com/2017/07/weltreise-auftakt-sao-miguel-azoren/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2017/08/DJI_0089_preview-1.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "10 Highlights unserer Reise durch Kolumbien",
    position: new google.maps.LatLng(4.6323099, -74.0709709),
    content:
      "<b>10 Highlights unserer Reise durch Kolumbien</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Kolumbien auf " +
      "<a href='https://wir.abwesend.com/2017/08/10-highlights-unserer-reise-durch-kolumbien/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2017/08/P8033785_preview.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Auf den Spuren der Inka in Peru",
    position: new google.maps.LatLng(-12.1205708, -77.0305231),
    content:
      "<b>Auf den Spuren der Inka in Peru</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Peru auf " +
      "<a href='https://wir.abwesend.com/2017/09/auf-den-spuren-der-inka-in-peru/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2017/09/IMG_9503_preview.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Mit dem Camper durch die Atacamawüste von Chile",
    position: new google.maps.LatLng(-33.44463, -70.6464716),
    content:
      "<b>Mit dem Camper durch die Atacamawüste von Chile</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Chile auf " +
      "<a href='https://wir.abwesend.com/2017/09/mit-dem-camper-durch-die-atacamawueste-von-chile/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2017/10/P9044484-1.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Buenos Aires, Patagonien und die Weiten Argentiniens",
    position: new google.maps.LatLng(-34.603684, -58.381559),
    content:
      "<b>Buenos Aires, Patagonien und die Weiten Argentiniens</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Argentinien auf " +
      "<a href='https://wir.abwesend.com/2017/10/buenos-aires-pat…ten-argentiniens/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2017/10/P9265060_preview.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Mit dem Camper durch das Land der Kiwis",
    position: new google.maps.LatLng(-36.84846, 174.763332),
    content:
      "<b>Mit dem Camper durch das Land der Kiwis</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Neuseeland auf " +
      "<a href='https://wir.abwesend.com/2017/11/mit-dem-camper-durch-das-land-der-kiwis/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2018/02/IMG_0799-preview.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Wir erkunden Japan mit dem Zug",
    position: new google.maps.LatLng(35.689488, 139.691706),
    content:
      "<b>Wir erkunden Japan mit dem Zug</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Japan auf " +
      "<a href='https://wir.abwesend.com/2018/01/wir-erkunden-japan-mit-dem-zug/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2018/01/Japan_preview.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Vietnam - mit Motorroller, Pho und Kaffee durch den Tag",
    position: new google.maps.LatLng(10.823099, 106.629664),
    content:
      "<b>Vietnam - mit Motorroller, Pho und Kaffee durch den Tag</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Vietnam auf " +
      "<a href='https://wir.abwesend.com/2018/01/vietnam-mit-motorroller-pho-und-kaffee-durch-den-tag/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2018/02/PC136239-preview.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Weihnachten bei Freunden in Indonesien",
    position: new google.maps.LatLng(-10.1748646, 123.579613),
    content:
      "<b>Weihnachten bei Freunden in Indonesien</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Indonesien auf " +
      "<a href='https://wir.abwesend.com/2018/02/weihnachten-bei-freunden-in-indonesien/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2018/02/PC296502-preview.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Unsere Reise durch Kerala - Das Land der Kokusnuss",
    position: new google.maps.LatLng(12.9542944, 77.4905099),
    content:
      "<b>Unsere Reise durch Kerala - Das Land der Kokusnuss</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Indien auf " +
      "<a href='https://wir.abwesend.com/2018/02/unsere-reise-durch-kerala-das-land-der-kokusnuss/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2018/02/P1176668-preview.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
  {
    title: "Kurz vor dem Ende der Reise noch im Toten Meer baden",
    position: new google.maps.LatLng(31.8354533, 35.667444),
    content:
      "<b>Kurz vor dem Ende der Reise noch im Toten Meer baden</b></br></br>" +
      "Erfahre mehr über unsere Zeit<br/> in Jordanien auf " +
      "<a href='https://wir.abwesend.com/2018/03/kurz-vor-dem-ende-der-reise-noch-im-toten-meer-baden/' class='marker-link' target='_blank'>unserem Blog</a>.<br/><br/>" +
      "<img src='https://wir.abwesend.com/wp-content/uploads/2020/01/IMG_2827.jpg' width='200px' height='auto' class='marker-image'><br/>",
  },
];

function requestJson(url, callback) {
  var jsonContent = {};
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status == 200) {
        jsonContent = JSON.parse(this.responseText);
      }
      callback(jsonContent);
    }
  };
  xhttp.send();
}

var savedMarker = [],
  travelled_route = [],
  gmap,
  MyMap = {
    settings: {
      mapOptions: {
        center: new google.maps.LatLng(15.7504886, 25.7576983),
        zoom: 2,
        styles: styles,
      },
      mapIcons: {
        circle: {
          url: "/images/circle.png", // url
          scaledSize: new google.maps.Size(10, 10), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(5, 5), // anchor
        },
        icon: {
          url: "/images/point.png", // url
          scaledSize: new google.maps.Size(39, 54), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(19, 55), // anchor
        },
        photoIcon: {
          url: "/images/camera.png", // url
          scaledSize: new google.maps.Size(39, 54), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(19, 55), // anchor
        },
        locationIcon: {
          url: "/images/location_red.png", // url
          scaledSize: new google.maps.Size(35, 47), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(17, 47), // anchor
        },
      },
    },

    init: function () {
      gmap = new google.maps.Map(
        document.getElementById("map-canvas"),
        this.settings.mapOptions,
      );

      this.addMarker();

      this.updateTravelRoute(
        this.settings.mapIcons.circle,
        this.settings.mapIcons.icon,
      );
    },

    updateTravelRoute: function (circle, icon) {
      requestJson("/static/polarsteps.json", function (steps) {
        for (var index in steps) {
          var step = steps[index];

          travelled_route.push(
            new google.maps.LatLng(step["lat"], step["lon"]),
          );
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
            icon: circle,
          });
        }

        for (var index in travelled_route) {
          var pointMarker = new google.maps.Marker({
            position: travelled_route[index],
            map: gmap,
            icon: circle,
          });
        }

        var TravelledLine = new google.maps.Polyline({
          path: travelled_route,
          strokeColor: "#FFA455",
          strokeWeight: 2,
          geodesic: true,
          map: gmap,
        });

        var PlannedLine = new google.maps.Polyline({
          path: planned_route,
          strokeColor: "#FFA455",
          strokeOpacity: 0.2,
          strokeWeight: 2,
          geodesic: true,
          map: gmap,
        });
      });
    },

    addMarker: function () {
      var infoWindow = new google.maps.InfoWindow();
      var gMarker, i;

      for (i = 0; i < markerData.length; i++) {
        gMarker = new google.maps.Marker({
          position: markerData[i].position,
          map: gmap,
          icon: this.settings.mapIcons.photoIcon,
        });
        google.maps.event.addListener(
          gMarker,
          "click",
          (function (gMarker, i) {
            return function () {
              infoWindow.setContent(markerData[i].content);
              infoWindow.open(gmap, gMarker);
            };
          })(gMarker, i),
        );
      }
    },

    resize: function (event) {
      var lastCenter = gmap.getCenter();
      google.maps.event.trigger(gmap, "resize");
      gmap.setCenter(lastCenter);
    },

    centerAndZoomMapTo: function (lat, lng, zoom, setMarker) {
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
          icon: locationIcon,
        });
        savedMarker.push(locationMarker);
      }
    },

    resetMap: function () {
      if (savedMarker.length != 0) {
        savedMarker.pop().setMap(null);
      }
      gmap.setCenter(new google.maps.LatLng(15.7504886, 25.7576983));
      gmap.setZoom(2);
    },
  };
var Feed = {
  settings: {
    maxItemsCount: 6,
    feedUrl: "/static/tweets.json",
    feedDomEle: document.getElementById("feedJson"),
  },

  init: function () {
    this.updateFeedContent(
      this.settings.feedUrl,
      this.settings.feedDomEle,
      this.settings.maxItemsCount,
    );
  },

  updateFeedContent: function (url, feedDomEle, maxItemsCount) {
    requestJson(url, function (jsonContent) {
      var feedEle = feedDomEle;
      var feedItems = "";
      var currentDate = new Date();
      for (var index in jsonContent) {
        var date = new Date(jsonContent[index].created_at);
        var dateFormatted = "";
        var hiddenClass = "";
        var twitterImg = "";

        if (date) {
          dateFormatted =
            date.getDate() +
            "." +
            (date.getMonth() + 1) +
            "." +
            date.getFullYear();
          var timeDifferenceInHours =
            (currentDate.getTime() - date.getTime()) / 1000 / 60 / 60;
          var timeDifferenceInMinutes =
            (currentDate.getTime() - date.getTime()) / 1000 / 60;
          var hours = Math.abs(Math.round(timeDifferenceInHours));
          var minutes = Math.abs(Math.round(timeDifferenceInMinutes));
          if (hours < 24) {
            dateFormatted = "vor " + hours + " Stunden";
          }
          if (hours === 1) {
            dateFormatted = "vor " + hours + " Stunde";
          }
          if (hours === 0) {
            dateFormatted = "vor " + minutes + " Minuten";
          }
        }

        var location = "";
        if (jsonContent[index].latitude && jsonContent[index].longitude) {
          location =
            '<a href="javascript:centerAndZoomMapTo(' +
            jsonContent[index].latitude +
            ", " +
            jsonContent[index].longitude +
            ', 13, true)" class="location"></a>';
        }

        twitterImg =
          '<img src="' +
          jsonContent[index].image_url +
          '" class="twitter-img">';

        if (index >= maxItemsCount) {
          hiddenClass = "hidden";
          twitterImg =
            '<img data-src="' +
            jsonContent[index].image_url +
            '" class="twitter-img">';
        }

        feedItems +=
          '<div id="' +
          jsonContent[index].id +
          '" class="feed-item ' +
          hiddenClass +
          '">' +
          '<div class="image">' +
          twitterImg +
          location +
          "</div>" +
          '<div class="date">' +
          dateFormatted +
          "</div>" +
          '<div class="copy"><img class="icon" src="/images/abwesend.png" width="40" height="40">' +
          jsonContent[index].description +
          "</div>" +
          "</div>";
      }
      feedEle.innerHTML = feedItems;
    });
  },

  onScroll: function () {
    var feedDiv = document.getElementById("feedJson");
    // mobile scroll
    if (document.body.clientWidth <= 700) {
      var contentHeight = document.body.scrollHeight;
      var scrollHeight = document.body.scrollTop + window.innerHeight;
    } else {
      var scrollInfo = document.getElementById("scrollInfo");
      scrollInfo.style.display = "none";
      var scrollTop = feedDiv.scrollTop;
      var contentHeight = feedDiv.scrollHeight;
      var contentOffset = feedDiv.offsetHeight;
      var scrollHeight = scrollTop + contentOffset;
    }

    // if the scroll is more than 90% from the top, load more content
    if (scrollHeight > contentHeight * 0.9) {
      // load content
      var hiddenItems = feedDiv.getElementsByClassName("hidden");
      if (hiddenItems.length !== 0) {
        var nextHiddenItem = hiddenItems[0];
        var image = nextHiddenItem.getElementsByClassName("twitter-img");
        if (image.length !== 0) {
          var src = image[0].getAttribute("data-src");
          image[0].setAttribute("src", src);
        }
        nextHiddenItem.classList.remove("hidden");
      }
    }
  },
};

(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    Feed.init();
    MyMap.init();
  });

  window.onScrollFeed = Feed.onScroll;
  window.addEventListener("scroll", Feed.onScroll);
  window.addEventListener("resize", MyMap.resize);
  window.centerAndZoomMapTo = MyMap.centerAndZoomMapTo;
  window.resetMap = MyMap.resetMap;
})();
