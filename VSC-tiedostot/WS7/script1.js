function loadAndParseXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(
      "GET",
      "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml",
      true
    );
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var xmlDoc = xmlhttp.responseXML;

        var quotes = xmlDoc.getElementsByTagName("quote");
        var authors = xmlDoc.getElementsByTagName("author");

        var txt = "<table>";

        for (i = 0; i < quotes.length; i++) {
          txt +=
            "<tr><td>" +
            quotes[i].childNodes[0].nodeValue +
            "</td>" +
            "<td>" +
            authors[i].childNodes[0].nodeValue +
            "</td></tr>";
          console.log(txt);
        }

        txt += "</table>";

        document.getElementById("tabledata").innerHTML = txt;
      }
    };
  }