document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const nav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});