define(function () {

  return function getContent(url) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
        var jsonContent = JSON.parse(this.responseText);

        var feedEle = document.getElementById("feedJson");
        var feedItems = "";
        var currentDate = new Date();
        for (var index in jsonContent) {
          var date = new Date(jsonContent[index].created_at);
          var dateFormatted = "";
          if (date) {
            dateFormatted = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
            var timeDifferenceInHours = (currentDate.getTime() - date.getTime()) / 1000 / 60 / 60;
            var timeDifferenceInMinutes = (currentDate.getTime() - date.getTime()) / 1000 / 60;
            var hours = Math.abs(Math.round(timeDifferenceInHours));
            var minutes = Math.abs(Math.round(timeDifferenceInMinutes));
            if (hours < 24) {
              dateFormatted = 'vor ' + hours + ' Stunden';
            }
            if (hours === 1) {
              dateFormatted = 'vor ' + hours + ' Stunde';
            }
            if (hours === 0) {
              dateFormatted = 'vor ' + minutes + ' Minuten';
            }
          }

          var location = "";
          if (jsonContent[index].latitude && jsonContent[index].longitude) {
             location = '<a href="javascript:centerAndZoomMapTo(' + jsonContent[index].latitude + ', ' + jsonContent[index].longitude + ', 13, true)" class="location"></a>';
          }

          feedItems +=
          '<div id="' + jsonContent[index].id + '" class="feed-item">' +
            '<div class="image">' +
              '<img src="' + jsonContent[index].image_url + '">' + location +
            '</div>' +
            '<div class="date">' + dateFormatted + '</div>' +
            '<div class="copy"><img class="icon" src="images/abwesend.png" width="40" height="40">' + jsonContent[index].description + '</div>' +
          '</div>';
        }
        feedEle.innerHTML = feedItems;
      }
    };
    xhttp.send();
  }

});