"use strict";

$(function (){

	$('.js-menu-mobile').on('click', function(){
		$('body').toggleClass('menu-opened');

		$('.header__menu').toggleClass('opened');
	});


	$(window).on('load resize', function () {
		if ($(this).width() <= 1365) {
			$('.has-submenu-arrow').on('click', function (event) {
				$('.has-submenu').removeClass('opened');
				$(this).parents('.has-submenu').toggleClass('opened');
			});
		}
	});

	var video = $(".js-video-carousel");
	var nav = video.data('nav');
	var dots = video.data('dots');
	video.owlCarousel({
		responsiveClass: true,
		nav: nav,
		dots: dots,
		autoHeight: false,
		responsive: {
			0: {
				items: 1,
				margin: 20,
				autoHeight: true,
			},
			768: {
				margin: 20,
				slideBy: 2,
				items: 2,
				autoHeight: true,
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

	$('.js-map-cinema').on('click', function(event){
		event.preventDefault();
		$('#mapsModal').arcticmodal();
	});

	$('.js-video-modal').on('click', function(event){
		event.preventDefault();
		$('#videoModal').arcticmodal();
	});

	$('.js-search').on('click', function(){
		$('body').toggleClass('search-opened');
		$('.search-modal').removeClass('hidden');
	});

	$('.js-search-close').on('click', function () {
		$('body').toggleClass('search-opened');
		$('.search-modal').addClass('hidden');
	});

	$('.js-photo-gallery a').simpleLightbox();


	if ($('.js-select').length) {
		$('.js-select').select2();

		$('.js-select').on('select2:opening select2:closing', function( event ) {
			var $searchfield = $(this).parent().find('.select2-search__field');
			$searchfield.prop('disabled', true);
		});
	}

	if ( $('.js-festival-form').length ) {
		$('.js-festival-form').validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				message: "required"
			},
			messages: {
				name: {
					required: "Ce champs est obligatoire",
				},
				email: {
					required: "Ce champs est obligatoire",
					email: "L'adresse doit être de la forme mail@mail.ru"
				},
				message: {
					required: "Ce champs est obligatoire",
				}
			},
			submitHandler: function() {
				$('.info-page__result').removeClass('hidden');
			}
		});
	}

});