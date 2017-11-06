function requestJson(url, callback) {
  var jsonContent = {};
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status == 200) {
        jsonContent = JSON.parse(this.responseText);
      }
      callback(jsonContent);
    }
  }
  xhttp.send();
}