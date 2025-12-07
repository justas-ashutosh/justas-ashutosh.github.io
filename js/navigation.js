// Navigation Module - Smooth scrolling and parallax

function initNavigation() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Parallax effect on hero
function initParallax() {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const scrollY = window.scrollY * 0.2;
        hero.style.backgroundPosition = `center calc(50% + ${scrollY}px)`;
    });
}

// Initialize AOS
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            easing: 'ease-out-back',
            once: true,
            mirror: false
        });
    }
}

// Initialize all on page load
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initParallax();
    initAOS();
});