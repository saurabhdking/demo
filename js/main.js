// Toggle menu jquery
	$('.icon').click(function(){
        $('span').toggleClass("cancel");
      });

// Toggle menu

// hero section
// Hero slider JS
$('.hero-slider').owlCarousel({
animateOut: 'flipOutX',
animateIn: 'fadeIn',
items:1,
loop:true,
nav:true,
dots: true,
})


// Swipper
$(document).ready(function() {
  $('.card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


