$(document).ready(function() {

	$('form').submit(function() {
		var newitem = $("#text_value").val(); //stores entered text when submit button is hit
		$('ul').append('<li>' + '<img class="cancel" src="images/cancel.png" height=15px>' + '<span>' + newitem + '</span>' + '<img class="cart" src="images/cart.png" height=30px>' +'</li>'); //appends entered text as new line item when submit button clicked
		$('#text_value').val('');  //resets text box after item submitted
		return false;
	});

	$('ul').on('click', '.cart', function() {
		$(this).parent().toggleClass('checked');  //crosses off item when clicked to signify item has been obtained
	});

	$('ul').on('click', '.cancel', function() {
		$(this).parent().remove();
	})


	
})