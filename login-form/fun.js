
// JavaScript for the carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  }

  slides.forEach((slide) => slide.style.display = "none");
  dots.forEach((dot) => dot.classList.remove("dot-checked"));

  slides[currentSlide].style.display = "block";
  dots[currentSlide].classList.add("dot-checked");
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

setInterval(nextSlide, 3000); // Change slide every 5 seconds