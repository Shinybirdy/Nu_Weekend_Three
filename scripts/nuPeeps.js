$( function() {

  $('#getJsonAjax').on('click', getJsonAjax);
console.log( 'button clicked' );
});

function getJsonAjax(){

     $.ajax({

       type: 'GET',
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',

       success: function( data ){
         //console.log( 'in ajax success' );
         console.log( data );
          $('#person').append('<div class="person"></div>');
          var nuPerson = "<p>Name: " + data.first_name + " " + data.last_name + "<p/>";
          $('person').append(data);

          var getNuPerson = function(){
              for (i = 0; i < data.length; i++){
                console.log(getNuPerson);
                getNuPerson();
            }
          };
        },
        statusCode: {
          404: function(){
            alert ( 'error connecting to server');
          } //end 404 Code
        }   //end statusCode



    });//end success
} //end ajax object
//end click getJsonAjax button

// //   X- Your first task is to make an AJAX call from the client side app.js, using the .ajax method and
// //   X- access the json data through the url above.
//
// //    X- When successful, it should bring the data back down.
//
// //    You will then need to combine that with what you have learned about
// //   parsing objects and arrays to complete the challenge.
// //
// //
// //    What I would like to see on the DOM, is one person at a time represented -
// //    the info for the first person in the json data.
//
// //    On the screen should also be "Prev" and "Next" buttons, that when pressed, show the information for the appropriate person.
// //These should wrap - "prev" when on the first person should wrap around to show the last person and vice versa.
// //
// //    Also on the dom : a display showing the number of people and which is being currently viewed (eg. "2/20")
// //
// //    When a person is displayed, show their name, their city, and their piece of shoutout feedback.
//       //Only one person should be show cased at any given time.
// //    KINDA HARD MODE
// //
// //    Add a button for each person - appended to DOM when the json is read in.
// //    Clicking any button will display that person. Place these between the "prev" and "next" buttons.
// //
// //    HARD MODE
// //
// //    Include a fade out and fade in animation in-between transitioning people.
// //    PRO MODE
// //
// //    Include a timer that moves to the next person
// //    if the user is not clicking on next or prev.
// //    If the user clicks on next or prev, the timer should be reset.
// //    The timer should transition between people every 10 seconds.
//

//$(document).ready(function() {
//     //loadData();
//
//     $('#load-data').on('click', loadData);
// });
//
// function loadData() {
//     $.ajax({
//
// }
//
//
// var nuArray = {};
// var getNuPerson = function(){
//   for(i=0; i < students.length; i++){
//   // EXAMPLE  document.getElementById("ajaxButton").onclick = function() { makeRequest('test.html'); };
//
//   }
//
// };
//var $el = $('#person').children().last();
//$el.append('<h2>' + nuPerson + '</h2>');
//$el.append('<h3>' + students.city + '</h3>');
//$el.append('<p>' + students.shoutout + '</p>');
//$el.append('<img src="' + person.imageURL +'" />');
// var nuArray = {};
// var getNuPerson = function(){
// for(i=0; i < students.length; i++){}
//
// })
