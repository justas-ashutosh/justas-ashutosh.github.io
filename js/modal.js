// Modal Module - Handles photo modal display

let modalInstance = null;

// Initialize modal
function initModal() {
    const modalEl = document.getElementById('photoModal');
    if (modalEl && typeof bootstrap !== 'undefined') {
        modalInstance = new bootstrap.Modal(modalEl);
    }
}

// Open photo modal
function openPhotoModal(photo) {
    if (!modalInstance) {
        initModal();
    }

    const modalTitle = document.getElementById('modalTitle');
    const modalTitleText = document.getElementById('modalTitleText');
    const modalImg = document.getElementById('modalImg');
    const modalDesc = document.getElementById('modalDesc');

    if (modalTitle) {
        modalTitle.textContent = `${photo.location} — ${photo.year}`;
    }
    if (modalTitleText) {
        modalTitleText.textContent = `${photo.location} — ${photo.year}`;
    }
    if (modalImg) {
        modalImg.src = photo.src;
        modalImg.alt = photo.location;
    }
    if (modalDesc) {
        modalDesc.textContent = photo.desc;
    }

    if (modalInstance) {
        modalInstance.show();

        // GSAP animation
        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.modal-content',
                { scale: 0.98, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initModal);