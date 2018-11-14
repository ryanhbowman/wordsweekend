function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days
    // 'hours': hours,
    // 'minutes': minutes,
    // 'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  // var hoursSpan = clock.querySelector('.hours');
  // var minutesSpan = clock.querySelector('.minutes');
  // var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    // hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    // minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    // secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

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
function animateWords() {
  $( ".tilt" ).each(function() {
    //if first half or second
    var adjust = $(this).attr('data-adjust');
    //the current random left margin that is annoying
    var currentLeft = 400;
    var tabs = 144;
    var browserSize = $(window).innerWidth();

    if (browserSize > 1700){
      var elementWidth = $(this).data('width')+ currentLeft;
      var windowWidth = 1400;
      var margin = ((windowWidth / 2) - ((currentLeft + elementWidth) / 2)) - (Math.floor(Math.random() * 100) + 170 );
      if (adjust == '2'){
        margin = ((windowWidth / 2) - ((currentLeft + elementWidth) / 2)) + (Math.floor(Math.random() * 100) + 170 );
      }
    }

    if (browserSize > 769 && browserSize < 1700){
      var elementWidth = $(this).data('width')+ currentLeft;
      var windowWidth = browserSize - tabs;
      var margin = ((windowWidth / 2) - ((currentLeft + elementWidth) / 2)) - (Math.floor(Math.random() * 100) + 170);
      if (adjust == '2'){
        margin = ((windowWidth / 2) - ((currentLeft + elementWidth) / 2)) + (Math.floor(Math.random() * 100) + 170);
      }
    }
    else if (browserSize < 769 && browserSize > 735){
      var elementWidth = $(this).data('width');
      var windowWidth = browserSize;
      var margin = (Math.floor(Math.random() * (windowWidth / 5))) ;
      if (adjust == '2'){
        margin = (Math.floor(Math.random() * (windowWidth / 5)) + (windowWidth / 2)) - currentLeft;
      }
      var maxWidth = 600;
      // console.log('medium')
    }
    else if (browserSize < 735 && browserSize > 500){
      var elementWidth = $(this).data('width');
      var windowWidth = browserSize;
      var margin = (Math.floor(Math.random() * (windowWidth / 6)));
      if (adjust == '2'){
        margin = 0
      }
      var maxWidth = 600;
      // console.log('small')
    }
    else if (browserSize < 500){
      var elementWidth = $(this).data('width');
      var windowWidth = browserSize;
      var margin = (Math.floor(Math.random() * 10) + 20);
      if (adjust == '2'){
        margin = (Math.floor(Math.random() * 10)+30)
      }
      var maxWidth = 300;
      // console.log('xsmall')
    }

    $(this).css('transform', 'translateX('+margin+'px)').css('opacity','1');
    if (maxWidth){
      $(this).css('max-width',maxWidth + 'px');
    }

    console.log('adjust' + adjust);
    console.log('windowWidth' + windowWidth);
    console.log('elementWidth' + elementWidth);
    console.log('margin' + margin);

  });


  $('.tlt').textillate(
    {
    initialDelay: 200,
     type: 'char',
     inEffects: ['rollIn'],
     minDisplayTime: 200,
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
}

$(window).scroll(function () {
  minLogo();
});


$(window).resize(function () {
  animateWords();

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
      $('.menu-pop-up').toggleClass('active');
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

  $(".main").click(function() {
      // e.preventDefault();
      $('#tabContainer').removeClass().addClass('tab-container');
  });


animateWords();


});
