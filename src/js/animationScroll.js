let animItems = document.querySelectorAll('[data-anim-item]');

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll(params){
		for(let i = 0; i < animItems.length; i++){
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('active');
			}
		}
	}

	function offset(el){
		const rect = el.getBoundingClientRect()
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}