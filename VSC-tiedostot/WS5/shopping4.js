function validateExtra() {
    var x = document.getElementById("extrafield");
    x.style.display = "block";
    var selection = document.forms.extra.cont.selectedIndex;

    if (selection == 0) {
        document.getElementById("extra_text").innerHTML = "Phone number missing";
    } else {
        document.getElementById("extra_text").innerHTML = "E-mail address missing";
    }
    return false;
}

var x = document.getElementById("extrafield");
x.style.display = "none";