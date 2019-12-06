$(document).ready(function() {
	$("body").removeClass("preload");
	$('.burger').click(function(){
		$(this).toggleClass('open');
		$("body").toggleClass('open');
	});
	$(".slider").slick({
		autoplay: false,
  		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev svg slick-arrow"><svg viewBox="0 0 188.5 306"><polygon points="71 153 188.5 35.5 153 0 0 153 153 306 188.5 270.5 "></polygon></svg></button>',
		nextArrow: '<button type="button" class="slick-next svg slick-arrow"><svg viewBox="0 0 188.5 306"><polygon points="117.5 153 0 270.5 35.5 306 188.5 153 35.5 0 0 35.5 "></polygon></svg></button>'
  	});
});

$(window).scroll(function(){
	if ( $(this).scrollTop() > 200 ) { 
		$('body').addClass("scrolled");
	} else { 
		$('body').removeClass("scrolled");
	}
});

$('a[href^="#"]').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - scrollOffset
	}, 500, 'swing', function() {});
});