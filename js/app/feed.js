define(function () {

  return function getContent(url) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
        var jsonContent = JSON.parse(this.responseText);

        var feedEle = document.getElementById("feedJson");
        var feedItems = "";
        for (var index in jsonContent) {
          var date = new Date(jsonContent[index].created_at);
          var dateFormatted = "";
          if (date) {
            dateFormatted = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
          }

          feedItems +=
          '<div id="' + jsonContent[index].id + '" class="feed-item">' +
            '<div class="image">' +
              '<img src="' + jsonContent[index].image_url + '">' +
              '<a href="javascript:centerAndZoomMapTo(' + jsonContent[index].latitude + ', ' + jsonContent[index].longitude + ', 13, true)" class="location"></a>' +
            '</div>' +
            '<div class="date">' + dateFormatted + '</div>' +
            '<div class="copy">' + jsonContent[index].description + '</div>' +
          '</div>';
        }
        feedEle.innerHTML = feedItems;
      }
    };
    xhttp.send();
  }

});