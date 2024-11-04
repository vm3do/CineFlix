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
      document.querySelector(".container").style.display = "none"
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


