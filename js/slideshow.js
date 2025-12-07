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