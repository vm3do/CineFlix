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


//////////////////////////////////// search

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

//////////////////////////////////////// dark mode

const themeToggleButton = document.getElementById("theme-toggle");

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const currentTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
}

themeToggleButton.addEventListener("click", toggleTheme);

applySavedTheme();

////////////////////////////////// ratting

document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll("#star-rating .fa-star");

  // Function to apply the saved rating from localStorage
  function applySavedRating() {
    const savedRating = localStorage.getItem("rating");

    if (savedRating) {
      highlightStars(parseInt(savedRating));
    }
  }

  // Function to highlight stars up to the selected rating
  function highlightStars(rating) {
    stars.forEach(star => {
      star.classList.toggle("filled", parseInt(star.getAttribute("data-value")) <= rating);
    });
  }

  // Add click event to each star
  stars.forEach(star => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.getAttribute("data-value"));
      localStorage.setItem("rating", rating); // Save rating in localStorage
      highlightStars(rating); // Highlight stars based on the rating
    });
  });

  // Apply the saved rating on page load
  applySavedRating();
});


