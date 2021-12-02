function dwnldJSOND(city){
    var kaupunki = city;
    var xhttp = new XMLHttpRequest();
    var url = "#"
        if (this.readyState == 4 && this.Status == 200){
            jsonObj = JSON.parse(xhttp.responseText);
            console.log(jsonObj);
            printJSONTable(jsonObj);
        } else if (this.reasdyState == 4 && this.status == 404) {
            alert("City not found");
            return;
        }
    xhttp.open("GET",url,true)
    xhttp.send();
}

function printJSONT(json){
    var data = JsonObj;
    var taulukko = "<table><tr><th>Kaupunki</th><th>Lämpötila</th><th>Tuuli</th></tr></table>"
    var tuuli = data.wind.speed
    taulukko += "<tr><td>" + nimi + "</td><td>" 
                + lämpötila + "</td><td>" 
                + tuuli + "</td></tr>" 
                + "</table>";
    if (nimi = "Helsinki"){
        document.getElementById("").innerHTML = taulukko;
    } else {
        document.getElemnetById("weatherdata").innerHTML = taulukko;
        }
    
}