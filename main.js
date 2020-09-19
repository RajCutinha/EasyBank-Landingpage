const mobileNav = document.querySelector('nav ul');
const burger = document.querySelector('.mobile-burger');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('on');
  header.classList.toggle('on');
  burger.classList.toggle('on');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.toggle('on');
    header.classList.toggle('on');
    burger.classList.toggle('on');
  });
});