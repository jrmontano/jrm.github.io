// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const contactInfo = document.querySelector('.contact-info');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
  if (window.innerWidth <= 900) {
    contactInfo.classList.toggle('hide-mobile');
  }
});


