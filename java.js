// setting moment to now
var now = moment();
// displaying current
$("#currentDay").text(now.format("LLLL"));

$(".confirm").on("click", function () {
    // var event = $("#description").trim();
    // console.log(event);
    //grabbed val for confirmbtn
    var details = $(".time-9 .des").val();
    console.log("time-9" + details);
    localStorage.setItem("time-9", details);
    var time9 = localStorage.getItem("time-9");

    var details = $(".time-10 .des").val();
    localStorage.setItem("time-10", details);
    var time10 = localStorage.getItem("time-10");

    var details = $(".time-11 .des").val();
    console.log("time-11" + details);
    localStorage.setItem("time-11", details);
    var time11 = localStorage.getItem("time-11");

    var details = $(".time-12 .des").val();
    console.log("time-12" + details);
    localStorage.setItem("time-12", details);
    var time12 = localStorage.getItem("time-12");

    var details = $(".time-13 .des").val();
    console.log("time-13" + details);
    localStorage.setItem("time-13", details);
    var time13 = localStorage.getItem("time-13");

    var details = $(".time-14 .des").val();
    console.log("time-14" + details);
    localStorage.setItem("time-14", details);
    var time14 = localStorage.getItem("time-14");


    var details = $(".time-15 .des").val();
    console.log("time-15" + details);
    localStorage.setItem("time-15", details);
    var time15 = localStorage.getItem("time-15");

    var details = $(".time-16 .des").val();
    console.log("time-16" + details);
    localStorage.setItem("time-16", details);
    var time16 = localStorage.getItem("time-16");

    var details = $(".time-17 .des").val();
    console.log("time-17" + details);
    localStorage.setItem("time-17", details);
    var time17 = localStorage.getItem("time-17");

    var details = $(".time-18 .des").val();
    console.log("time-18" + details);
    localStorage.setItem("time-18", details);
    var time18 = localStorage.getItem("time-18");

    var details = $(".time-19 .des").val();
    console.log("time-19" + details);
    localStorage.setItem("time-19", details);
    var time19 = localStorage.getItem("time-19");

    var details = $(".time-20 .des").val();
    console.log("time-20" + details);
    localStorage.setItem("time-20", details);
    var time20 = localStorage.getItem("time-20");

    var details = $(".time-21 .des").val();
    console.log("time-21" + details);
    localStorage.setItem("time-21", details);
    var time21 = localStorage.getItem("time-21");

    //console.log($('.time-9 .des').val());
    //you will need to do the same for the rest of the vals so 
    //when the user clicks on a confirm btn we will updated for all time slots
});
//now we need to put into the text field for the user
$("textarea#time-9").val(localStorage.getItem("time-9"));
$("textarea#time-10").val(localStorage.getItem("time-10"));
$("textarea#time-11").val(localStorage.getItem("time-11"));
$("textarea#time-12").val(localStorage.getItem("time-12"));
$("textarea#time-13").val(localStorage.getItem("time-13"));
$("textarea#time-14").val(localStorage.getItem("time-14"));
$("textarea#time-15").val(localStorage.getItem("time-15"));
$("textarea#time-16").val(localStorage.getItem("time-16"));
$("textarea#time-17").val(localStorage.getItem("time-17"));
$("textarea#time-18").val(localStorage.getItem("time-18"));
$("textarea#time-19").val(localStorage.getItem("time-19"));
$("textarea#time-20").val(localStorage.getItem("time-20"));
$("textarea#time-21").val(localStorage.getItem("time-21"));


// i want the current time to be in red, 
// the past time in gray, and future time in green