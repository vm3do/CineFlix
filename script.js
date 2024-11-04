const carousel = document.querySelector(".slider-wrapper");
const scrollStep = 1;
let Hovered = false;

// Auto-scroll function
function scroll() {
  if (!Hovered) {
    carousel.scrollBy({ left: scrollStep });
    
    // Reset to start when reaching halfway
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    }
  }
  requestAnimationFrame(scroll);
}

requestAnimationFrame(scroll);

carousel.addEventListener("mouseenter", () => Hovered = true);
carousel.addEventListener("mouseleave", () => Hovered = false);

document.querySelector(".next").addEventListener("click", () => {
  Hovered = true;
  carousel.scrollBy({ left: 300, behavior: "smooth" });
  setTimeout(() => Hovered = false, 2000);
});

document.querySelector(".prev").addEventListener("click", () => {
  Hovered = true;
  carousel.scrollBy({ left: 300, behavior: "smooth" });
  setTimeout(() => Hovered = false, 2000);
});


////////////////////////////////////

let search = document.querySelector("input[type='search']")
let movies = document.querySelectorAll(".movies .item")
let slider = document.querySelector(".container")

search.addEventListener("keyup", (e) => {
  let text = e.target.value.toLowerCase()

  movies.forEach((item) => {
    let title = item.getAttribute('data-title').toLowerCase()

    if (title.includes(text)) {
      item.style.display = ""
    } else {
      item.style.display = "none"
    }
  })
})