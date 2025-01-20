// Välj hamburgermenyn och mobilmenyn
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Lyssna efter klick på hamburgermenyn
hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
});

// CSS för att visa menyn
function toggleMenu() {
    const menu = document.querySelector('.high-tech-menu');
    menu.classList.toggle('menu-active');
}

