$("button").click(function () {
    $("h1").hide();
    $("h1").fadeIn(2000);
});

$("button2").click(function () {
    $("h1").fadeOut(2000);
});

$("button3").click(function () {
    $("h1").slideUp(2000);
});

$("button4").click(function () {
    $("h1").hide();
    $("h1").slideDown(3000);
});

$("button5").click(function () {
    $("h1").animate({fontColor:"red", fontSize: "20px"}, 1500);
    $("h1").animate({fontColor:"black", fontSize: "15px"}, 1500);
});