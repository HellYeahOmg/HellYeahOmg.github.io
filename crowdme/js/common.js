$(function() {

	$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
  $("header ul").slideToggle();
});

});
