document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuIcon.addEventListener('click', function() {
        mobileMenu.style.display = 'flex';
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
    });
});