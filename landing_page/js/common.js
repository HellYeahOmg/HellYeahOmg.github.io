$(document).ready(function() {

	$('#portfolio_grid').mixItUp();

	$('.top_text h1').animated('fadeInDown', 'fadeOutUp');
	$('.top_text p').animated('fadeInUp', 'fadeOutIn');
	$('.animation_2').animated('fadeInLeft', 'fadeOutIn');
	$('.animation_1').animated('fadeInUp', 'fadeOutIn');
	$('.animation_3').animated('fadeInRight', 'fadeOutIn');
	$('.left .resume_item').animated('fadeInLeft', 'fadeOutIn');
	$('.right .resume_item').animated('fadeInRight', 'fadeOutIn');

	function heightDetect(){
		$('.main_head').css('height', $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".top_mnu ul a").mPageScroll2id();

	$(".toggle_mnu").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$('.top_mnu ul a').click(function(){
		$('.top_mnu').fadeToggle(600);
		$(".sandwich").toggleClass("active");
	});

	$('.toggle_mnu').click(function(){
		$('.top_mnu').fadeToggle(600);
		$('.top_mnu li a').toggleClass('fadeInUp animated');
		$('.top_text').toggleClass('h_op');
	});

	  $('.popup').magnificPopup({type:'image'});
	  $('.popup_content').magnificPopup();

	  $('.s_portfolio li').click(function(){
	  	$('.s_portfolio li').removeClass('active');
	  	$(this).addClass('active');
	  });

	  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});