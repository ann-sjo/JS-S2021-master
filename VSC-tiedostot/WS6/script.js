var dest = document.getElementById("destination").value;
var date = document.getElementById("arrival").value;
var extras = "";

var services = document.getElementById("services").innerHTML;

var selections = document.querySelectorAll(
  "input[type=checkbox]:checked"
);

for (var i = 0; i < selections.length; i++) {
  console.log(selections[i].value);

  // lista erotellaan pilkulla
  extras += selections[i].value + ", ";
}

// datan tallentaminen
localStorage.setItem("extras", extras);
localStorage.setItem("destination", dest);
localStorage.setItem("date", date);
localStorage.setItem("services", services);