function calculate() {
  "use strict";
  var total = 0;
  var special = 0;
  var ale = 1;
  var cost = 10;
  var text = "";

  var ftype = document.getElementById("type");
  var fale = document.getElementById("iD2");
  var fspecial = document.getElementById("iD");
  var fyears = document.getElementById("years");

  if (ftype == "premium") {
    cost = 15;
  } else if (ftype == "gold") {
    cost = 20;
  } else if (ftype == "platinum") {
    hinta = 25;
  }
  // b)
  if (fyears > 2) {
    ale = 0.8;
    text = "Sait 20% alennuksen.";
    alennus.innerHTML = teksti;
  } else {
    alennus.innerHTML = "";
    speciaali.innerHTML = "";
  }
  // c)
  if (fyears > 4) {
    special = 5;
    fspecial.innerHTML = "5€ alennusta.";
  }
  // a)
  total = cost * ftype * ale - special;
  return false;
}

function init() {
  var theForm = document.getElementById("theForm");
  theForm.onsubmit = calculate;
}

window.onload = init();
