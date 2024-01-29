$('.trigger').click(function(){
  $(this).toggleClass('active')
  $('header').toggleClass('active')
})
$('.gnb a').click(function(){
  $('.trigger').removeClass('active')
  $('header').removeClass('active')
})
$('body').click(function(){
  $('.trigger, header').removeClass('active')
})

/* Movie-Chart : Slick Slider */
$('.intro-movies').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  loop: true
});
