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

const heartIcon = document.querySelector(".heart-icon");
    const counterDisplay = document.querySelector(".counter");
    let count = 0;

    heartIcon.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });
////////////////
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});

