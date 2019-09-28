'use strict'

;(function(){
	let scrollSpeed = -40;

	function trackScroll(){
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;

		if (scrolled > coords){
			scrollUp.classList.add('scroll-up-btn-visible');
		}
		if (scrolled < coords){
			scrollUp.classList.remove('scroll-up-btn-visible');
		}
	}

	function scrollToTop(){
		if(window.pageYOffset > 0){
			window.scrollBy(0, scrollSpeed);
			setTimeout(scrollToTop, 10);
		}
	}

	let scrollUp = document.getElementById('scrolling');

	window.addEventListener('scroll', trackScroll);
	scrollUp.addEventListener('click', scrollToTop);
})();