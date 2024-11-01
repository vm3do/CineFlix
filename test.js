const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;
let isMoving = false;

// Clone first and last three slides to create an infinite effect
const firstClone = slides.slice(0, 3).map(slide => slide.cloneNode(true));
const lastClone = slides.slice(-3).map(slide => slide.cloneNode(true));
firstClone.forEach(clone => track.appendChild(clone));
lastClone.forEach(clone => track.prepend(clone));

// Update track position based on current index
function updateSlidePosition() {
  track.style.transition = isMoving ? "transform 0.5s ease" : "none";
  track.style.transform = `translateX(-${(currentIndex + 3) * slideWidth}px)`;
}

// Move slide by a given direction (1 for next, -1 for previous)
function moveSlide(direction) {
  if (isMoving) return;
  isMoving = true;
  currentIndex += direction;
  updateSlidePosition();

  // Reset position without visual break after transition
  track.addEventListener("transitionend", () => {
    if (currentIndex === slides.length) {
      currentIndex = 0;
      isMoving = false;
      updateSlidePosition();
    } else if (currentIndex === -1) {
      currentIndex = slides.length - 1;
      isMoving = false;
      updateSlidePosition();
    } else {
      isMoving = false;
    }
  });
}

// Autoplay with infinite loop
setInterval(() => moveSlide(1), 3000);

// Initialize position to the start of the first clone set
updateSlidePosition();

// Update position on window resize
window.addEventListener("resize", () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  updateSlidePosition();
});
