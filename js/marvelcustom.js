$(document).ready(function(){
	
	$('.mslider').owlCarousel({
    items:1,
	loop:true,
	animateOut: 'fadeOut',
    margin:0,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
    });
	
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.btn-gotop').fadeIn();
    } else {
        $('.btn-gotop').fadeOut();
    }
});

$(".btn-gotop").click(function() {
    $("html, body").animate({scrollTop: 0}, 2000);
 });
    
});