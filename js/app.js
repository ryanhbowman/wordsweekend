$(".scroll").click(function(e) {
    e.preventDefault();
    toScroll = $(this).attr('data-scroll');
    $([document.documentElement, document.body]).animate({
        scrollTop: ($(toScroll).offset().top - 100)
    }, 1000);
    $('.menu').removeClass('show');
    $('.menu-button').removeClass('active');
});

$(".menu-button").click(function(e){
  e.preventDefault();
  value = $(this).html();
  $('.menu').toggleClass('show');
  $(this).toggleClass('active');
  if( value == 'menu'){$(this).html('close');}
  else { $(this).html('menu');}

});
