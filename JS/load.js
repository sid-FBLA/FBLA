


function addClass(e) {
  $.get('HTML/bookings.html', null, function(text){
    alert($(text).find('#arrival-location'));
  });
}
