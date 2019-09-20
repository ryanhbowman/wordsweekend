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

// var deadline = '2019-12-6'
// initializeClock('clockdiv', deadline);

function minLogo() {
        //how fast to hide the work mark
        var control = 13;
        //margin top is currently 25, we want to subtract 50 to get to -25
        // var marginTopExpected = 40;

        //how far you have scrolled
        var scrollProgress = $(window).scrollTop();
        // console.log(scrollProgress);
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
    var currentLeft = 600;
    var tabs = 0;
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
      var elementWidth = $(this).data('width') + currentLeft;
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

    // console.log('adjust' + adjust);
    // console.log('windowWidth' + windowWidth);
    // console.log('elementWidth' + elementWidth);
    // console.log('margin' + margin);

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
  
  if ($('.yellow').length > 0){
      var distance = $('.yellow').offset().top,
      $window = $(window);
      if ($window.scrollTop() >= (distance - 90)) {
        // console.log('yellow');
        $('header').addClass('yellow-bg');
      }
      else {
        $('header').removeClass('yellow-bg');
      }
    }
  
  if ($('.pink').length > 0) {
    var distance2 = $('.pink').offset().top, $window = $(window);
    if ($window.scrollTop() >= (distance2 - 90)) {
      // console.log('pink');
      $('header').addClass('pink-bg');
    }
    else if ($window.scrollTop() <= (distance2 - 90)) {
      $('header').removeClass('pink-bg');
    }
  }
    

if ($('.blue').length > 0) {

  var distance3 = $('.blue').offset().top, $window = $(window);
  var heightBlue = $('.blue').height();
  // console.log(distance3 + heightBlue);
  // console.log(distance3);
  // console.log(heightBlue);
  if ($window.scrollTop() >= (distance3 - 90) && $window.scrollTop() <= (distance3 + heightBlue)) { 
    $('header').addClass('blue-bg');
  }
 
  else {
    $('header').removeClass('blue-bg');
    // console.log('remove2');
  }
}
  

  });


$(window).resize(function () {
  animateWords();

});


$( document ).ready(function() {
  if ($('.no-animation').length > 0){
    $.getJSON('https://api.sheety.co/39392d11-c09a-4d10-b84c-24ab3043b689', function (data) {
    var template = Handlebars.compile($('#item-template').html())
    $('#items').html(template(data))

    })
  

  .done(function(){
    if ($(window).width() > 600) {
      $(".event").find('.clickable').click(function () {
        // console.log('event');
        if($(this).parent().hasClass('open')){
          $(this).parent().siblings().each(function () {
            $(this).removeClass('open');
            $(this).removeClass('dulled');
          });
          $(this).parent().removeClass('dulled');
          $(this).parent().removeClass('open');
        }
        else {
          $(this).parent().siblings().each(function () {
            $(this).removeClass('open');
            $(this).addClass('dulled');
          });
          $(this).parent().removeClass('dulled');
          $(this).parent().addClass('open');
        }
        
      });

      $(".close").click(function (e) {
        // console.log('close2');
        e.preventDefault();
        $(this).parent().parent().removeClass('open');
        $(this).parent().parent().siblings().each(function () {
          $(this).removeClass('open');
          $(this).removeClass('dulled');
        });
        // $(this).parent().parent().siblings().each(function () {
        //   $(this).removeClass('open').removeClass('dulled');
        // });
        // if (e.target !== e.currentTarget) return;

      });
    }
    $(".menu-activator").click(function (e) {
      e.preventDefault();
      if ($('.menu-pop-up').hasClass('active')){
        $('.menu-pop-up').removeClass('active');
        // console.log('has');
      }
      else {
        $('.menu-pop-up').addClass('active');
        // console.log('no');
      }
      
      
    });

  })
}
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

  Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  });

  Handlebars.registerHelper('contains', function (needle, haystack, options) {
    needle = Handlebars.escapeExpression(needle);
    haystack = Handlebars.escapeExpression(haystack);
    return (haystack.indexOf(needle) > -1) ? options.fn(this) : options.inverse(this);
  });



  // $(".menu-item").click(function(e) {
  //     e.preventDefault();
  //     var tabLocation = $(this).attr('data-location');
  //     $('#tabContainer').removeClass();
  //     $('#tabContainer').addClass('tab-container').addClass(tabLocation);
  //     $('.menu-pop-up').toggleClass('active');
  // });

  $(".menu-activator").click(function(e) {
      e.preventDefault();
      $('.menu-pop-up').toggleClass('active');
  });

  // $(".close-tab").click(function(e) {
  //     e.preventDefault();
  //     $('#tabContainer').removeClass().addClass('tab-container');
  // });

  // $(".header").click(function(e) {
  //     e.preventDefault();
  //     $('#tabContainer').removeClass().addClass('tab-container');
  // });

  // $(".main").click(function() {
  //     // e.preventDefault();
  //     $('#tabContainer').removeClass().addClass('tab-container');
  // });


animateWords();


});
