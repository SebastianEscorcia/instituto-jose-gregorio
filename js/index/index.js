
document.addEventListener('DOMContentLoaded', function() {
  // Menú móvil
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  
  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    this.textContent = menu.classList.contains('active') ? '✕' : '☰';
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
  
  // Carrusel
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.carousel-button.prev');
  const nextBtn = document.querySelector('.carousel-button.next');
  
  let currentIndex = 0;
  
  function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });
  
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
  
  // Auto slide (opcional)
  setInterval(function() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000);
});