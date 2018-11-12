function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = '2019-10-25'
initializeClock('clockdiv', deadline);

function minLogo() {
        //how fast to hide the work mark
        var control = 13;
        //margin top is currently 25, we want to subtract 50 to get to -25
        // var marginTopExpected = 40;

        //how far you have scrolled
        var scrollProgress = $(window).scrollTop();
        console.log(scrollProgress);
        if (scrollProgress > control){
          $('.small-logo').addClass('logo-active');
          $('.big-logo').removeClass('logo-active');
        }
        else {
          $('.small-logo').removeClass('logo-active');
          $('.big-logo').addClass('logo-active');
        }
}
$(window).scroll(function () {
  minLogo();
});

$( document ).ready(function() {
  $('.carousel').slick({
    nextArrow:'.next',
    prevArrow:'.prev',
  });

  $(".scroll").click(function(e) {
      e.preventDefault();
      toScroll = $('#mail');
      $([document.documentElement, document.body]).animate({
          scrollTop: ($(toScroll).offset().top - 100)
      }, 1000);
  });

  $(".tab header").click(function(e) {
      e.preventDefault();
      var tabLocation = $(this).parent().attr('data-location');
      $('#tabContainer').removeClass();
      $('#tabContainer').addClass('tab-container').addClass(tabLocation);
  });

  $(".menu-item").click(function(e) {
      e.preventDefault();
      var tabLocation = $(this).attr('data-location');
      $('#tabContainer').removeClass();
      $('#tabContainer').addClass('tab-container').addClass(tabLocation);
  });

  $(".mobile-menu").click(function(e) {
      e.preventDefault();
      $('.menu-pop-up').toggleClass('active');
  });

  $(".close-tab").click(function(e) {
      e.preventDefault();
      $('#tabContainer').removeClass().addClass('tab-container');
  });

  $(".header").click(function(e) {
      e.preventDefault();
      $('#tabContainer').removeClass().addClass('tab-container');
  });

  $(".main").click(function(e) {
      e.preventDefault();
      $('#tabContainer').removeClass().addClass('tab-container');
  });


$( ".tilt" ).each(function() {
  var adjust = $(this).attr('data-adjust');
  var elementWidth = $(this).data('width')+ 100;

  var windowWidth = $(window).innerWidth();
  // var elementWidth = $(this).innerWidth();
  // var left = (windowWidth / 5) - elementWidth;
  var margin = (Math.floor(Math.random() * 100) + 200) * -1;
  if (adjust == '2'){
    // console.log('second');
    margin = Math.floor(Math.random() * 200) + 50 + elementWidth;
  }
  console.log('adjust' + adjust);
  console.log('windowWidth' + windowWidth);
  console.log('elementWidth' + elementWidth);
  console.log('margin' + margin);
  $(this).css('transform', 'translateX('+margin+'px)');
});

$('.tlt').textillate(
  {
  initialDelay: 200,
   type: 'char',
   inEffects: ['rollIn'],
   minDisplayTime: 0,
 }
);

$('.tlt2').textillate(
  {
  initialDelay: 400,
   type: 'char',
   inEffects: ['splat'],
   minDisplayTime: 0,
 }
);

$('.tlt3').textillate(
  {
  initialDelay: 600,
   type: 'char',
   inEffects: ['rollIn'],
   minDisplayTime: 0,
 }
);

$('.tlt4').textillate(
  {
  initialDelay: 800,
   type: 'char',
   inEffects: ['splat'],
   minDisplayTime: 0,
 }
);
$('.tlt5').textillate(
  {
  initialDelay: 1000,
   type: 'char',
   inEffects: ['rollIn'],
   minDisplayTime: 0,
 }
);


});
