// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navMenu = document.getElementById('navMenu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

