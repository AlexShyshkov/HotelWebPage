'use strict'

window.addEventListener('DOMContentLoaded', function(){
	let guestsInHotel = document.querySelectorAll('.price-counter-form-block-input')[0];
	let daysInHotel = document.querySelectorAll('.price-counter-form-block-input')[1];
	let roomType = document.getElementById('select-room');
	let totalSum = document.getElementById('total-sum');

	let personsSum = 0;
	let daysSum = 0;
	let total = 0;
	let standart = 30;

	guestsInHotel.addEventListener('change', function(){
		personsSum = +this.value;
		total = (daysSum * personsSum) * standart;

		if(daysInHotel.value === '' || guestsInHotel.value === ''){
			totalSum.innerHTML = 0;
		} else {
			totalSum.innerHTML = total;
		}
	});

	daysInHotel.addEventListener('change', function(){
		daysSum = +this.value;
		total = (daysSum * personsSum) * standart;

		if(guestsInHotel.value === '' || daysInHotel.value === ''){
			totalSum.innerHTML = 0;
		} else {
			totalSum.innerHTML = total;
		}
	});

	roomType.addEventListener('change', function(){
		if(daysInHotel.value === '' || guestsInHotel.value === ''){
			totalSum.innerHTML = 0;
		} else{
			let a = total / standart;
			totalSum.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
});