var totalSeconds = 0;
var timerRunning = '';
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var timer = '';

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
			$('#startstop').text('Pause');
			timer = setInterval(startTimer, 1000);
		}
		else if (timerRunning == 'started') {
			timerRunning = 'stopped';
			$('#startstop').text('Resume');
			clearInterval(timer);
		}
	})

	$('#resettimer').on('click', function() {
		timerRunning = 'stopped';
		totalSeconds = 0;
		secondsLabel.innerHTML = '00';
		minutesLabel.innerHTML = '00';
		clearInterval(timer);
		$('#startstop').text('Start');
	})
	
})

function startTimer() {
	totalSeconds++;
	secondsLabel.innerHTML = pad(totalSeconds%60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val) {
	var valString = val + "";
	if(valString.length < 2) {
		return "0" + valString;
	}
	else {
		return valString;
	}
}