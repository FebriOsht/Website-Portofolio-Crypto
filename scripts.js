document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.portfolio-card img');
    
    let index = 0;
    
    function showImage(n) {
        images.forEach(image => {
            image.classList.remove('active');
        });
        images[n].classList.add('active');
    }
    
    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});

    
    showImage(0); // Set the first image as active initially
    setInterval(nextImage, 5000);
});
