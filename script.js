// Slideshow functionality for the Photo Gallery
let images = [
    "path/to/photo1.jpg",
    "path/to/photo2.jpg",
    "path/to/photo3.jpg"
];
let currentImageIndex = 0;

// Function to display the current slide
function showSlide(index) {
    const slideElement = document.getElementById('gallery-slide');
    currentImageIndex = (index + images.length) % images.length; // Handle looping
    slideElement.src = images[currentImageIndex];
}

// Function for the next slide
function nextSlide() {
    showSlide(currentImageIndex + 1);
}

// Function for the previous slide
function prevSlide() {
    showSlide(currentImageIndex - 1);
}

// Initialize the first slide on page load
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('gallery-slide')) {
        showSlide(currentImageIndex);
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});