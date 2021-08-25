@@include('./animationScroll.js');

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