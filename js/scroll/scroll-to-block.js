'use strict';

;(function(){
	let topAbout = document.getElementById('top-menu-about');
	let topSlider = document.getElementById('top-menu-slider');
	let topPrice = document.getElementById('top-menu-price');
	let topContact = document.getElementById('top-menu-contacts');

	let about = document.getElementById('about');
	let slider = document.getElementById('slider');
	let price = document.getElementById('price');
	let contacts = document.getElementById('contacts');

	topAbout.addEventListener('click', function(event){
		event.preventDefault();
		about.scrollIntoView(
				{
					behaviour: "smooth",
					block: "center"
				}
			);
	});

	topSlider.addEventListener('click', function(event){
		event.preventDefault();
		slider.scrollIntoView(
				{
					behaviour: "smooth",
					block: "center"
				}
			);
	});

	topPrice.addEventListener('click', function(event){
		event.preventDefault();
		price.scrollIntoView(
				{
					behaviour: "smooth",
					block: "center"
				}
			);
	});

	topContact.addEventListener('click', function(event){
		event.preventDefault();
		contacts.scrollIntoView(
				{
					behaviour: "smooth",
					block: "center"
				}
			);
	});
}());