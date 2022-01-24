//format jmoment
var currentDay = moment().format('MMMM Do YYYY');
//console.log(currentDay)
$("#currentDay").append(currentDay);

var eventDetails = document.getElementById("#EVDN");

var myStorage = window.localStorage;
var m = moment();
//Date and Time Element
$(document).ready(function() {
  $(".btn-info").on("click", function() {
    var eventDetails =
    $("textarea").append(eventDetails);
    //console.log(eventDetails)
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  })
//Time Block Coloring Coding Function
  function runTime() {
    var currentTime = moment().hour();
    //console.log(currentTime)
    $(".timeblock").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
  
      if (currentTime == blockTime) {
        $(this).addClass("present");
  } 
      else if (currentTime < blockTime) {
        $(this).removeClass("present");
        $(this).addClass("future");
  }   else (currentTime > blockTime); {
        $(this).removeClass("future");
        $(this).addClass("past");
  }
})} 
//Local Storage Items
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
//function called
runTime();
})
