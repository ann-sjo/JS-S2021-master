function loadAndParseNews(filename) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", filename, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 1) {
        document.getElementById("uutisdata").innerHTML =
          "Wait while Im loading...";
      }
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var xmlDoc = xmlhttp.responseXML;
        console.log(xmlDoc);
        var items = xmlDoc.getElementsByTagName("item");

        var item,
          feedlink,
          name,
          description,
          content = "";

        for (i = 0; i < items.length; i++) {
          feedlink = items[i].getElementsByTagName("link").item(0)
            .firstChild.nodeValue;
          name = items[i].getElementsByTagName("title").item(0)
            .firstChild.nodeValue;
          item = "<li>" + name + "</li>";
          item = '<li><a href="' + feedlink + '">' + name + "</a></li>";
          content += item;
        }
        document.getElementById
        ("uutisdata").innerHTML =
          "<ul>" + content + "</ul>";
      }
    };
  }