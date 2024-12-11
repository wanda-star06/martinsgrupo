// Carrossel de Imagens
let currentIndex = 0;

const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;
const carouselImages = document.querySelector(".carousel-images");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

function prevImage() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
  updateCarousel();
}

function nextImage() {
  currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
  updateCarousel();
}

// Eventos para os botões
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
