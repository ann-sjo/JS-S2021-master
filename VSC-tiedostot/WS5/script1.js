function getData(){

    var f = document.forms[0];
    var email = f.email.value;
    var comment = f.comment.value;

    alert("This is your email: " + email);
    alert("This is your comment: " + comment);
    }
    
    function validate () {
        var valid = true;
        var email = document.getElementById("email");

    if (email.length < 6 || email.length > 15) {
        f.email.style.borderColor = "red";
        feed.innerHTML = "Input too long/short";
        valid = false;
    } if (email.indexOf("@") < 0  ) {
        f.email.style.borderColor = "red";
        feed.innerHTML = "That's not an email.";
        valid = false;
    } else {
        document.getElementById("feedback1").innerHTML = "";
        email.parentNode.classList.remove("error");
    }

    if (comment.value == null) {
        email.parentNode.classList.add("error");
        document.getElementById("feedback2").innerHTML = "Be more verbose.";
        valid = false;
    }

    if (comment.length > 50) {
        comment = comment.substring(0,50);
    }

    else {
        if (valid) {
            alert("Comments:\n" + text + "\nemail:" + email.value);
        }
    }
    return valid;
    }
