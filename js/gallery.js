// Gallery Module - Handles photo display and filtering

// Utility: Create DOM element
function createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    return element;
}

// Shuffle array helper (Fisher-Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Build filter dropdown
function buildFilter() {
    const select = document.getElementById('filterYear');
    if (!select) return;

    const years = Array.from(new Set(PHOTOS.map(p => p.year))).sort((a, b) => b - a);
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    });

    select.addEventListener('change', () => {
        renderGallery(select.value);
    });
}

// Render gallery with optional filter
function renderGallery(filter = 'all') {
    const masonry = document.getElementById('masonry');
    if (!masonry) return;

    masonry.innerHTML = '';
    const filteredPhotos = PHOTOS.filter(p =>
        filter === 'all' || String(p.year) === String(filter)
    );

    filteredPhotos.forEach(photo => {
        const item = createElement('div', 'photo-item');
        const frame = createElement('div', 'photo-frame');

        if (photo.orientation === 'portrait') {
            frame.classList.add('portrait');
        }

        // Create image
        const img = createElement('img');
        img.src = photo.thumb;
        img.alt = photo.location;
        img.loading = 'lazy';
        frame.appendChild(img);

        // Create meta strip
        const meta = createElement('div', 'photo-meta');
        meta.innerHTML = `
            <div>
                <div class='meta-year'>${photo.year}</div>
                <div class='meta-location'>${photo.location}</div>
            </div>
        `;
        frame.appendChild(meta);

        // Add reveal text
        const reveal = createElement('div', 'meta-reveal small text-muted');
        reveal.textContent = `${photo.year} · ${photo.location}`;
        meta.appendChild(reveal);

        // Click handler for modal
        frame.addEventListener('click', () => openPhotoModal(photo));

        // Add animation
        frame.setAttribute('data-aos', 'fade-up');

        item.appendChild(frame);
        masonry.appendChild(item);
    });

    // Refresh AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Shuffle button handler
function initShuffle() {
    const shuffleBtn = document.getElementById('shuffleBtn');
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            shuffleArray(PHOTOS);
            const filterYear = document.getElementById('filterYear');
            renderGallery(filterYear ? filterYear.value : 'all');
        });
    }
}

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', () => {
    buildFilter();
    renderGallery();
    initShuffle();
});
```

### **js/modal.js** (Modal Functionality)
```javascript
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