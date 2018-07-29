$(function() {

	$TypeOfAuto = 'Gazel'; //or Long.Gazel
	$timeOfRent = $('#time-of-rent').html(); //5 by default
	$centerEntry = false; //or true
	$fromCAD = $('#fromCAD').html();

	$CountOfStevedores = $('#CountOfStevedores').html(); //0 by default
	$TimeOfJob = $("#timeOfJob").html(); //4 by default

	$boxes = $('#boxes').html();
	$bubbleWrap = $("#bubbleWrap").html();
	$stretch = $('#stretch').html();
	$cardboard = $("#cardboard").html();
	$tape = $('#tape').html();

	calc();

	$('#auto span.list').mouseenter(function() {
		$('#autoChoose').show();
	});

	$('#autoChoose').mouseleave(function() {
		$(this).hide();
	});

	$('#Usual').click(function() {
		$('#auto em').html('Газель');
		$('#autoChoose').hide();
		$TypeOfAuto = 'Gazel';
		calc();
	});

	$('#Long').click(function() {
		$('#auto em').html('Удл. Газель');
		$('#autoChoose').hide();
		$TypeOfAuto = 'Long.Gazel';
		calc();
	});

	$('.plus-time-of-rent').click(function() {
		$timeOfRent++;
		$('#time-of-rent').html($timeOfRent);
		calc();
	})

	$('.minus-time-of-rent').click(function() {
		if($timeOfRent == 5) {
		}
		else {
			$timeOfRent--;
			$('#time-of-rent').html($timeOfRent);
			calc();
		}
	})

	$('#admission-to-the-center span.list').mouseenter(function() {
		$('#admission-list').show();
	})

	$('#admission-list').mouseleave(function() {
		$(this).hide();
	})

	$("#admission-yes").click(function() {
		$('#admission-to-the-center em').text('да');
		$('#admission-list').hide();
		$centerEntry = true;
		calc();
	})

	$("#admission-no").click(function() {
		$('#admission-to-the-center em').text('нет');
		$('#admission-list').hide();
		$centerEntry = false;
		calc();
	})

	$('.plus-fromCad').click(function() {
		$fromCAD++;
		$('#fromCAD').html($fromCAD);
		calc();
	})
	$('.minus-fromCad').click(function() {
		if ($fromCAD == 0) {
		} else {
			$fromCAD--;
			$('#fromCAD').html($fromCAD);
			calc();
		}
	})
	$('.minus-stevedores').click(function() {
		if ($CountOfStevedores == 0 ) {

		} else {
			$CountOfStevedores--;
			calc();
			$('#CountOfStevedores').html($CountOfStevedores);
		}

	})
	$('.plus-stevedores').click(function() {
		$CountOfStevedores++;
		calc();
		$('#CountOfStevedores').html($CountOfStevedores);
	})
	$('.plus-time-of-job').click(function() {
		$TimeOfJob++;
		$("#timeOfJob").html($TimeOfJob);
		calc();
	})

	$('.minus-time-of-job').click(function() {
		if ($TimeOfJob == 4) {

		} else {
			$TimeOfJob--;
			$("#timeOfJob").html($TimeOfJob);
			calc();
		}

	})
	$(".minus-box").click(function() {
		if ($boxes == 0) {

		} else {
			$boxes--;
			$("#boxes").html($boxes);
			calc();
		}

	})
	$(".plus-box").click(function() {
		$boxes++;
		$("#boxes").html($boxes);
		calc();

	})	
	$('.plus-bubbleWrap').click(function() {
		$bubbleWrap++;
		$("#bubbleWrap").html($bubbleWrap);
		calc();
	})
	$('.minus-bubbleWrap').click(function() {
		if ($bubbleWrap == 0) {

		} else {
			$bubbleWrap--;
			$("#bubbleWrap").html($bubbleWrap);
			calc();
		}
	})

	$(".plus-stretch").click(function() {
		$stretch++;
		$("#stretch").html($stretch);
		calc();
	})

	$(".minus-stretch").click(function() {
		if ($stretch == 0) {

		}	else {
			$stretch--;
			$("#stretch").html($stretch);
			calc();
		}

	})
	$('.plus-cardboard').click(function() {
		$cardboard++;
		$("#cardboard").html($cardboard);
		calc();
	})
	$('.minus-cardboard').click(function() {
		if ($cardboard == 0) {

		}	else {
		$cardboard--;
		$("#cardboard").html($cardboard);
		calc();			
		}

	})
	$(".plus-tape").click(function() {
		$tape++;
		$("#tape").html($tape);
		calc();
	})
	$(".minus-tape").click(function() {
		if ($tape == 0) {

		}	else {
			$tape--;
			$("#tape").html($tape);
			calc();		
		}

	})

	function calc() {
		$auto = 0 //$TypeOfAuto
		$center = 0 //$centerEntry
		if ($TypeOfAuto == 'Gazel') {
			$auto = 450
		} else {
			$auto = 500;
		};

		if ($centerEntry) {
			$center = 500;
		}
		$totalPrice = $auto * $timeOfRent + $center + $fromCAD * 15 + 
		$CountOfStevedores * $TimeOfJob * 350 + $boxes * 100 + $bubbleWrap * 150 
		+ $stretch * 90 + $cardboard * 190 + $tape * 30;
		$('.totalPrice .price em').html($totalPrice);
	};

	function def(){
		$('#auto em').html('Газель');
		$TypeOfAuto = 'Gazel';
		$("#time-of-rent").html(5);
		$timeOfRent = 5;
		$centerEntry = false;
		$('#admission-to-the-center em').text('нет');
		$fromCAD = 0;
		$('#fromCAD').html(0);
		$CountOfStevedores = 0;
		$("#CountOfStevedores").html(0);
		$TimeOfJob = 4;
		$("#timeOfJob").html(4);
		$boxes = 0;
		$('#boxes').html(0);
		$bubbleWrap= 0;
		$("#bubbleWrap").html(0);
		$stretch = 0;
		$('#stretch').html(0);
		$cardboard = 0;
		$("#cardboard").html(0);
		$tape = 0;
		$('#tape').html(0);
		calc();
	};

	$("#default").click(function() {
		def();
	})




});

