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
};

const socialsButton = document.querySelector('[data-socials-dropdown]')
const socialsList = document.querySelector('[data-socials-list]')
const buttonMenu = document.querySelector('[data-button-menu]')
const menu = document.querySelector('[data-menu]')
const body = document.querySelector('body')

socialsButton.addEventListener('click', toggleSocials)
buttonMenu.addEventListener('click', toggleMenu)

function toggleSocials(){
  socialsList.classList.toggle('active')
}

function toggleMenu(){
  menu.classList.toggle('open')
  body.classList.toggle('overflow-hidden')
}