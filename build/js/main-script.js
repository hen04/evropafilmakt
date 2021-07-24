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

	var video = $(".js-video-carousel");
	video.owlCarousel({
		responsiveClass: true,
		nav: true,
		responsive: {
			0: {
				items: 1,
				margin: 20,

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

	var films = $(".js-films-carousel");
	$(window).on('load resize', function () {
		if ($(this).width() >= 1366) {
			films.trigger('destroy.owl.carousel').removeClass('owl-carousel');
		}
		else {
			films.addClass('owl-carousel');
			films.on('initialized.owl.carousel changed.owl.carousel', function(e) {
				if (!e.namespace)  {
					return;
				}
				var carousel = e.relatedTarget;
				$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
			}).owlCarousel({
				responsiveClass: true,
				autoHeight: true,
				nav: true,
				dots: false,
				responsive: {
					0: {
						items: 1,
						margin: 20,
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
		}
	});

	$('.link a').on('click', function(event){
		event.preventDefault();
		$('#mapsModal').arcticmodal();
	});

	$('.video__item a').on('click', function(event){
		event.preventDefault();
		$('#videoModal').arcticmodal();
	});


});