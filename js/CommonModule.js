$(document).ready(function () {
	$('.collapse').collapse()
	$('[data-toggle="datepicker"]').datepicker();
	$('.custom-control-input').iCheck({
		checkboxClass: 'icheckbox_square-grey',
		radioClass: 'iradio_square-grey',
	    increaseArea: '20%', // optional	    
	});
	$('#customControlInline').on('ifToggled', function(event){
		$(".box-money").fadeToggle();
	});
	$('.vis input#squaredThree').on('ifToggled', function(event){
		if (this.checked) {
			$(".vis label").html("<span class='labeltxt'>SHOW SMALL BALANCES</span>");
			$(".table .showing").fadeToggle();
		} else {
			$(".vis label").html("<span class='labeltxt'>HIDE SMALL BALANCES</span>");
			$(".table .showing").fadeToggle();
		}
	});
	$('[data-toggle="tooltip"]').tooltip();
	$(".box-block").each(function(){
		var boxHeight = $(this).outerHeight() + 40;
		var tblHeight = $(".ttl").outerHeight();
		var totalHeight = boxHeight + tblHeight;
		$(".box-top").css("height", totalHeight);
	});
	$(".date").each(function(){
		var txtHeight = $(".date p").outerHeight();
		$(".tbl .status p").css("height", txtHeight);
		$(".tbl .wallet p").css("height", txtHeight);
	});
	var favoriteHeight = $(".favorite").outerHeight();
	var balancesasideHeight = $(".balances.aside").outerHeight();
	var totalHeight = favoriteHeight + balancesasideHeight + 15;
	var totalHeight = favoriteHeight + balancesasideHeight + 15;
	$(".deposit_details").css("height", totalHeight);
	$(".deposit_success").css("height", totalHeight);
	

	$(".input-group").each(function(){
		$("#price").on("change paste keyup", function(){
			$(".button-minus-price").removeAttr("disabled");
			$(".button-plus-price").removeAttr("disabled");
		});
		$("#amount").on("change paste keyup", function(){
			$(".button-minus-amount").removeAttr("disabled");
			$(".button-plus-amount").removeAttr("disabled");
		});
	});	

	function incrementValue(e) {
		e.preventDefault();
		var fieldName = $(e.target).data('field');
		var parent = $(e.target).closest('div');
		var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

		if (!isNaN(currentVal)) {
			parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
		} else {
			parent.find('input[name=' + fieldName + ']').val(0);
		}
	}

	function decrementValue(e) {
		e.preventDefault();
		var fieldName = $(e.target).data('field');
		var parent = $(e.target).closest('div');
		var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

		if (!isNaN(currentVal) && currentVal > 0) {
			parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
		} else {
			parent.find('input[name=' + fieldName + ']').val(0);
		}
	}

	$('.input-group').on('click', '.button-plus', function(e) {
		incrementValue(e);
	});

	$('.input-group').on('click', '.button-minus', function(e) {
		decrementValue(e);
	});
});
