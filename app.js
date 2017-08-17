$(document).ready(function(){

  $('#yes1').click(function() {
   $('#declawingAnswer1').show();
   $('.declawing').hide();


});
$('#no1').click(function() {
 $('#declawingAnswer2').show();
 $('.declawing').hide();


});
$('#yes2').click(function() {
 $('#farmingAnswer2').show();
 $('#farming').hide();


});
$('#no2').click(function() {
 $('#farmingAnswer1').show();
 $('#farming').hide();


});
$('#yes3').click(function() {
 $('#testingAnswer2').show();
 $('#testing').hide();


});
$('#no3').click(function() {
 $('#testingAnswer1').show();
 $('#testing').hide();


});
$('#yes4').click(function() {
 $('#puppyAnswer1').show();
 $('#puppyMills').hide();


});
$('#no4').click(function() {
 $('#puppyAnswer2').show();
 $('#puppyMills').hide();


});
});






 $(document).ready(function() {
   var timesYesButtonClicked = 0;
   var timesNoButtonClicked = 0;

   $(".yes").click(function() {
     timesYesButtonClicked++;
   });
   $(".no").click(function() {
     timesNoButtonClicked++;
   });
   $("#submit").click(function() {
     if ( > ) {

       $("").show();
     } else if ( < ) {
       $("").show();
     }
   });

   $("#submit").click(function() {
     if ( > ) {
       $("").show();

    } else if ( < ) {
       $("").show();
     }

  });
 });
