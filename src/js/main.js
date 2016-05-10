//Note: jquery is required by bootstrap

window.getgcal = function(){
  console.log('getcal fired');
  var apiKey = 'AIzaSyDZ4PygSkkKST37XP7haH-5JWXPDS3xhvk';
  var calendarId = 'aaronclamp.com_b7fo0kt1qs4t91n6glnt4teju0@group.calendar.google.com';

  $.ajax({
    type: 'GET',
    url: encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + apiKey),
    dataType: 'json',
    success: function (res) {
      console.log(res);
      //do whatever you want with each
    },
    error: function (res) {
      console.log(res);
      //tell that an error has occurred
    }
  });
  /*
    # Test google calendar api
    :apiKey = AIzaSyDZ4PygSkkKST37XP7haH-5JWXPDS3xhvk
    #:apiKey = AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY
    :calendarId = aaronclamp.com_b7fo0kt1qs4t91n6glnt4teju0@group.calendar.google.com
    #:calendarId = milan.kacurak@gmail.com

    # GET myself
    GET https://www.googleapis.com/calendar/v3/calendars/:calendarId/events?key=:apiKey

    #httprc=aaronclamp.com_b7fo0kt1qs4t91n6glnt4teju0@group.calendar.google.com

    # https://www.googleapis.com/calendar/v3/calendars/httprc=aaronclamp.com_b7fo0kt1qs4t91n6glnt4teju0@group.calendar.google.com/events?key=AIzaSyDZ4PygSkkKST37XP7haH-5JWXPDS3xhvk
    # https://www.googleapis.com/calendar/v3/calendars/milan.kacurak@gmail.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY
  */
};

$(document).ready(function(){
  //smooth scroll to element on click
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
  });
});
