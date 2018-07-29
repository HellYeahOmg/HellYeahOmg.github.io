$(document).ready(function () {
	$("nav ul").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1500);
	});
});


$(document).ready(function () {
	// При клике по кнопке, с id="btnModal"
	$("#btnModal").click(function () {
		// Открыть модальное окно с id="exampleModal"
		$("#exampleModal").modal('show');
	});
});


$(document).ready(function () {
	var HeaderTop = $('nav').offset().top;

	$(window).scroll(function () {
		if ($(window).scrollTop() > HeaderTop) {
			$('nav').css({ position: 'fixed', top: '0px' });
		} else {
			$('nav').css({ position: 'static' });
		}
	});
});
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		autoplay: 'true',
		items: 3,
		margin: 150,
		center: 'true',
		loop: 'true',
		autoWidth: 'true',
	});
});

$(document).ready(function() {
	var $hamburger = $(".hamburger");
	var $menu = $('nav ul');
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active");
		// Do something else, like open/close menu
		$menu.slideToggle();
	});
});


