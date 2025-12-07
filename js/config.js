// Photo Gallery Data Configuration
const PHOTOS = [
    {
        id: 1,
        src: 'https://picsum.photos/1200/900?random=101',
        thumb: 'https://picsum.photos/800/600?random=101',
        year: 2021,
        location: 'Hawaii Beach',
        orientation: 'landscape',
        desc: 'Crystal clear waves and a timeless day.'
    },
    {
        id: 2,
        src: 'https://picsum.photos/1200/1600?random=102',
        thumb: 'https://picsum.photos/800/1200?random=102',
        year: 2019,
        location: 'New York City',
        orientation: 'portrait',
        desc: 'Streets, lights and endless stories.'
    },
    {
        id: 3,
        src: 'https://picsum.photos/1600/900?random=103',
        thumb: 'https://picsum.photos/900/600?random=103',
        year: 2020,
        location: 'Iceland',
        orientation: 'landscape',
        desc: 'Cold, raw and majestic.'
    },
    {
        id: 4,
        src: 'https://picsum.photos/1200/900?random=104',
        thumb: 'https://picsum.photos/800/600?random=104',
        year: 2022,
        location: 'Morocco',
        orientation: 'landscape',
        desc: 'Markets and patterns.'
    },
    {
        id: 5,
        src: 'https://picsum.photos/1200/900?random=105',
        thumb: 'https://picsum.photos/800/600?random=105',
        year: 2018,
        location: 'Tokyo',
        orientation: 'landscape',
        desc: 'Neon nights and quiet mornings.'
    },
    {
        id: 6,
        src: 'https://picsum.photos/1600/1200?random=106',
        thumb: 'https://picsum.photos/900/700?random=106',
        year: 2023,
        location: 'Grand Canyon',
        orientation: 'landscape',
        desc: 'Vastness and geology.'
    }
];

// Slideshow Images
const SLIDESHOW_IMAGES = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1500&q=80'
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PHOTOS, SLIDESHOW_IMAGES };
}