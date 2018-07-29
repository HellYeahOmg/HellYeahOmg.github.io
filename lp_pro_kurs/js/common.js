$(document).ready(function() {

  $('.popup').magnificPopup();

  $(".owl-carousel").owlCarousel({
  	loop: true,
  	nav: true,
  	navText: '',
  	responsive : {
  		0 : {
  			items:1
  		}
  	}

  });

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
			}, 1000);
		});
	});

	$(".header-phone .tab_item").not(":first").hide();
$(".header-phone .wrapper .tab").click(function() {
	$(".header-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".header-phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".header_main .tab_item").not(":first").hide();
$(".header_main .wrapper .tab").click(function() {
	$(".header_main .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".header_main .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".contacts .tab_item").not(":first").hide();
$(".contacts .wrapper .tab").click(function() {
	$(".contacts .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".contacts .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$("footer .tab_item").not(":first").hide();
$("footer .wrapper .tab").click(function() {
	$("footer .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$("footer .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});