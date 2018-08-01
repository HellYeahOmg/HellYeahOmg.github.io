$(function() {

	$('.footer__right__top').click(function() {
		$('.footer__right__bot').toggle();
	});

 	$(document).ready(function () {
		var HeaderTop = $('.header').offset().top;
		var menu = $('.left__menu');
		var green = $('.green');
		var content = $('.content');
		var email = $('.more__email');
		var site = $('.more__site');

		$(window).scroll(function () {
			if (window.matchMedia('(max-width: 768px)').matches) {
				if ($(window).scrollTop() > HeaderTop) {
					$('.header').css({ position: 'fixed', top: '0px', 'marginTop': '0' });
					content.css('marginTop', '150px');
					email.hide();
					site.hide();
				} else {
					$('.header').css({ position: 'static', 'marginTop': '20px' });
					content.css('marginTop', '0px');
					email.show();
					site.show();
				}
			}
			else if (window.matchMedia('(max-width: 992px)').matches) {
				if ($(window).scrollTop() > HeaderTop) {
					$('.header').css({ position: 'fixed', top: '0px', 'marginTop': '0' });
					menu.css({ position: 'fixed', top: '130px', width: '150px' });
					green.css('marginTop', '680px')
					content.css('marginTop', '150px');
					email.hide();
					site.hide();
				} else {
					$('.header').css({ position: 'static', 'marginTop': '20px' });
					menu.css({ position: 'static', top: '0', });
					green.css('marginTop', '305px')
					content.css('marginTop', '0px');
					email.show();
					site.show();
				}
			}
			else if (window.matchMedia('(max-width: 1200px)').matches) {
				if ($(window).scrollTop() > HeaderTop) {
					$('.header').css({ position: 'fixed', top: '0px', 'marginTop': '0' });
					menu.css({ position: 'fixed', top: '130px', width: '210px' });
					green.css('marginTop', '680px')
					content.css('marginTop', '150px');
					email.hide();
					site.hide();
				} else {
					$('.header').css({ position: 'static', 'marginTop': '20px' });
					menu.css({ position: 'static', top: '0', });
					green.css('marginTop', '305px')
					content.css('marginTop', '0px');
					email.show();
					site.show();
				}
			}
			else if (window.matchMedia('(max-width: 1920px)').matches) {
				if ($(window).scrollTop() > HeaderTop) {
					$('.header').css({ position: 'fixed', top: '0px', 'marginTop': '0' });
					menu.css({ position: 'fixed', top: '130px', width: '255px' });
					green.css('marginTop', '680px')
					content.css('marginTop', '150px');
					email.hide();
					site.hide();
				} else {
					$('.header').css({ position: 'static', 'marginTop': '20px' });
					menu.css({ position: 'static', top: '0', });
					green.css('marginTop', '305px')
					content.css('marginTop', '0px');
					email.show();
					site.show();
				}
			}


		});
	}); 


});

