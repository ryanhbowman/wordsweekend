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

  $(".close-tab").click(function(e) {
      e.preventDefault();
      $('#tabContainer').removeClass().addClass('tab-container');
  });


});
