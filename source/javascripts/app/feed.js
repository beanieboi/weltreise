var Feed = {

  settings: {
    maxItemsCount: 6,
    feedUrl: "https://weltreise.abwesend.com/s3/weltreise-log.json",
    feedDomEle: document.getElementById("feedJson")
  },

  init: function(){
    this.updateFeedContent(
      this.settings.feedUrl,
      this.settings.feedDomEle,
      this.settings.maxItemsCount);
  },

  updateFeedContent: function(url, feedDomEle, maxItemsCount) {
    requestJson(url, function(jsonContent) {
      var feedEle = feedDomEle;
      var feedItems = "";
      var currentDate = new Date();
      for (var index in jsonContent) {
        var date = new Date(jsonContent[index].created_at);
        var dateFormatted = "";
        var hiddenClass = "";
        var twitterImg = "";

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

        twitterImg = '<img src="' + jsonContent[index].image_url + '" class="twitter-img">';

        if (index >= maxItemsCount) {
          hiddenClass = "hidden";
          twitterImg = '<img data-src="' + jsonContent[index].image_url + '" class="twitter-img">';
        }

        feedItems +=
        '<div id="' + jsonContent[index].id + '" class="feed-item ' + hiddenClass + '">' +
          '<div class="image">' + twitterImg + location +
          '</div>' +
          '<div class="date">' + dateFormatted + '</div>' +
          '<div class="copy"><img class="icon" src="/images/abwesend.png" width="40" height="40">' + jsonContent[index].description + '</div>' +
        '</div>';
      }
      feedEle.innerHTML = feedItems;
    });
  },

  onScroll: function() {
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
          var src = image[0].getAttribute('data-src');
          image[0].setAttribute('src', src);
        }
        nextHiddenItem.classList.remove("hidden");
      }
    }
  }
};

