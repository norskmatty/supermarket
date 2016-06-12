var startTime = 0;
var timerRunning = '';

$(document).ready(function() {


	$('form').submit(function() {
		var newitem = $("#text_value").val(); //stores entered text when submit button is hit
		$('ul').append('<li>' + '<img class="cancel" src="images/cancel.png" height=15px>' + '<span>' + newitem + '</span>' + '<img class="cart" src="images/cart.png" height=30px>' +'</li>'); //appends entered text as new line item when submit button clicked
		$('#text_value').val('');  //resets text box after item submitted
		$('#text_value').focus();
		return false;
	});

	$('ul').on('click', '.cart', function() {
		$(this).parent().toggleClass('checked');  //crosses off item when clicked to signify item has been obtained
	});

	$('ul').on('click', '.cancel', function() {
		$(this).parent().remove();
	})

	$('#startstop').on('click', function() {
		if (timerRunning == 'stopped' || timerRunning == '') {
			timerRunning = 'started';
			startTime = Math.floor(Date.now() / 1000);
			startTimer();
			$('#startstop').text('Stop Timer');
		}
		else if (timerRunning == 'started') {
			timerRunning = 'stopped';
			$('#startstop').text('Start Timer');
		}
	})
	
})

function startTimer() {
	if (timerRunning == 'stopped') {
		return;
	}

	var now = Math.floor(Date.now() / 1000);
	var diff = now - startTime;
	console.log(diff);
	var m = Math.floor(diff / 60);
	var s = Math.floor(diff & 60);
	m = checkTime(m);
	s = checkTime(s);
	$('#minutes').text(m);
	$('#seconds').text(s);
	var t = setTimeout(startTimer, 500);

}

function checkTime(time) {
	if (time < 10) {
		time = "0" + time;
	}
	else if (time == 60) {
		time = "00";
	}
	return time;
}