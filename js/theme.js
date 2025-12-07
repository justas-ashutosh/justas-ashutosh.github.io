// Theme Module - Handles dark/light mode switching

function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    if (!themeBtn) return;

    // Set theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('site-theme', theme);
        themeBtn.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
    }

    // Toggle theme
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    setTheme(savedTheme);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initTheme);
```

### **js/slideshow.js** (Slideshow Functionality)
```javascript
// Slideshow Module - Handles hero slideshow

let slideIndex = 0;

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');

    if (slides.length === 0) return;

    // Show slides function
    function showSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
    }

    // Initialize first slide
    slides[0].classList.add('active');

    // Auto-advance every 5 seconds
    setInterval(showSlides, 5000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initSlideshow);
```

### **js/navigation.js** (Navigation & Utilities)
```javascript
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