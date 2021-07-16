"use strict";

$(function (){

	$('.js-menu-mobile').on('click', function(){
		$('body').toggleClass('menu-opened');

		$('.header__menu').toggleClass('opened');
	});


	if ( $('html').hasClass('mobile') ) {
		$('.has-submenu__inner a').on('click', function (event){
			event.preventDefault();

			$('.has-submenu').removeClass('opened');
			$(this).parents('.has-submenu').toggleClass('opened');
		});
	}


	var owl = $(".js-video-carousel");
	owl.owlCarousel({
		responsiveClass: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			768: {
				margin: 20,
				slideBy: 2,
				items: 2
			},
			1024: {
				margin: 20,
				slideBy: 3,
				items: 3
			}
		}
	});

	$('.next').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.prev').click(function() {
		owl.trigger('prev.owl.carousel');
	})

	$(".fancybox-thumb").fancybox({
		maxWidth : 800,
		maxHeight : 600,
		fitToView : false,
		width : '70%',
		height : '70%',
		autoSize : false,
		closeClick : false,
		openEffect : 'none',
		closeEffect : 'none'
	});

});