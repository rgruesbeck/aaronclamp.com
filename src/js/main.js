//get shows from google calendar
//mock function for now
var googleCalendar = function (opts) {
  var self = this;
  this.upcoming = function(cb){
    return [
      {
	date: "Now",
	time: "4:00",
	price: "$5",
	venue: "Starry Plough",
	address: "123 Fake St.",
	details: "BYOB"
      }
    ];
  };
  this.dump = function(){
    console.log("calendar data");
  };
  return this;
};

$(document).ready(function(){
  //instantiate Shows
  var Shows = googleCalendar({});
  //get upcoming shows and render to page
  Shows.upcoming(function(shows){
    console.log("hello");
    console.log(shows);
  });

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