/*Hiding the Elements*/
$('.animation img').hide()

/*Bringing in the images*/
$(document).ready(function(){
  $('.animation img').eq(0).slideDown(1000);
  $('.animation img').eq(1).delay(1000).slideDown(1000);
  $('.animation img').eq(2).delay(2000).slideDown(1000);
});
