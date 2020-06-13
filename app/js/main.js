

const burger = document.querySelector(".burger");
const links = document.querySelector(".header__nav--links");

burger.addEventListener('click', function(){
  links.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
})