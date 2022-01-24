//When I open the planner, the current day is displayed at the top of the calendar
var currentDay = moment().format('MMMM Do YYYY');
console.log(currentDay)
$("#currentDay").append(currentDay);
var currentTime = moment().format('LT');
console.log(currentTime)

var eventDetails = document.getElementById("#EVDN");


var myStorage = window.localStorage;
var m = moment();
//document.createAttribute(textarea)
//var Textcontent = textarea user.input;

$(document).ready(function() {
  $(".btn-info").on("click", function() {
    var eventDetails =
    $("textarea").append(eventDetails);
    console.log(eventDetails)
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });
/* Color Time Coordination*/
/* 
  $(this).replaceWith(textInput);
  }) */
//This function needs to call server to update time and date to show ://WHEN I view the time blocks for that day, each time block is color-coded to indicate whether it is in the past, present, or future
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));

//timeTracker();  
})
  //display current date and time at p lead
//function currentTime() {

 // $(".time-block").each(function () {
 //   var blockTime = parseInt($(this).attr("id").split("hour")[1]);
//}


//WHEN I click the save button for that time block, the text for that event is saved in local storage


//WHEN I refresh the page, the saved events persist
//append user input to display within the event description textarea
