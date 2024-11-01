// const films = document.querySelector('.slider-wrapper');
// // { transform: translateX(-${(100 / totalMovies) * (totalMovies / 2)}%) } bach 7sebna width d cards li aytscrollaw 9bel mtji part 2 for smoothness
// let animation;

// function animateFilms() {

//     animation = films.animate(
//         [
//             { transform: 'translateX(0%)' },
//             { transform: `translateX(-100%)` }
//         ],
//         {
//             duration: 5000,
//             iterations: Infinity,
//         }
//     );

// }

// animateFilms();
const carousel = document.querySelector(".slider-wrapper");
let scrollAmount = 0;
console.log(carousel)
function startCarousel() {
  setInterval(() => {
    carousel.scrollBy({ left: 1, behavior: "smooth" });
    scrollAmount += 1;

    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      scrollAmount = 0;
    }
  }, 30);
}

startCarousel();