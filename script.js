const hamburger = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.phone-nav-links');
 
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});