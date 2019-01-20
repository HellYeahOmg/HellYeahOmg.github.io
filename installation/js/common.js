$(function() {
  $(document).ready(function() {
    $(".header").sticky({ topSpacing: 0, zIndex: 1000 });
  });

  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    $(".header__menu--mobile").slideToggle();
  });
});
