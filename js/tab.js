'use strict'

window.addEventListener('DOMContentLoaded', function(){
	let tab = document.querySelectorAll('.info-header-tab');
	let info = document.querySelector('.info-header');
	let tabContent = document.querySelectorAll('.info-tab-content');

	function hideTabContent(currentTab){
		for(let i = currentTab; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	function showTabContent(newTab){
		if(tabContent[newTab].classList.contains('hide')){
			tabContent[newTab].classList.remove('hide');
			tabContent[newTab].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		let target = event.target;
		if(target && target.classList.contains('info-header-tab')){
			for(let i = 0; i < tab.length; i++){
				if(target === tab[i]){
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	})
});