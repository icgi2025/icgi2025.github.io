const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.navbar .nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');

for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
    });

    // Close mobile menu after clicking
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.classList.remove('is-active');
    }
}