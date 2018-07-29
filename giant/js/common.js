$(function() {

	function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.carousel').carousel({
            num: 3,
            maxWidth: 360,
            maxHeight: 500,
            autoPlay: false,
            distance: 100,
            scale: 0.6,
            animationTime: 1000,
            showTime: 4000
        });
		$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		  	margin: 30,
		  	items: 2,
		  	loop: true,
		  	nav: true,
		  	navText: ["<img src='img/left.png'>","<img src='img/right.png'>"]
		  });
		});

    } else {
    		$('.carousel').carousel({
            num: 7,
            maxWidth: 360,
            maxHeight: 500,
            autoPlay: false,
            distance: 100,
            scale: 0.6,
            animationTime: 1000,
            showTime: 4000
        });
		$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		  	margin: 30,
		  	loop: true,
		  	item: 3,
		  	nav: true,
		  	navText: ["<img src='img/left.png'>","<img src='img/right.png'>"]
		  });
		});

    }
}

var x = window.matchMedia("(max-width: 960px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes





function myFunctionTwo(s) {
    if (s.matches) { // If media query matches
            $('.carousel').carousel({
            num: 3,
            maxWidth: 180,
            maxHeight: 250,
            autoPlay: false,
            distance: 100,
            scale: 0.6,
            animationTime: 1000,
            showTime: 4000
        });
		$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		  	margin: 30,
		  	items: 1,
		  	loop: true,
		  	nav: true,
		  	navText: ["<img src='img/left.png'>","<img src='img/right.png'>"]
		  });
		});

    }
}

var s = window.matchMedia("(max-width: 576px)")
myFunctionTwo(s) // Call listener function at run time
s.addListener(myFunctionTwo) // Attach listener function on state changes




});
