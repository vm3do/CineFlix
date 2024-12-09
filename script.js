const moviesList = [
  {
    id: 3,
    title: "The Matrix",
    image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    image: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 7,
    title: "Fight Club",
    image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 8,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 11,
    title: "The Silence of the Lambs",
    image: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 12,
    title: "Parasite",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 13,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 15,
    title: "Gladiator",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 16,
    title: "The Wolf of Wall Street",
    image: "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 17,
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 18,
    title: "Avatar",
    image: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    detailsUrl: "details.html"
  },
  {
    id: 20,
    title: "Titanic",
    image: "https://image.tmdb.org/t/p/w500/wk58aoyWpMTVkKkdjw889XfWGdL.jpg",
    detailsUrl: "details.html"
  }
]

const savedMovies = [
  
]

localStorage.setItem('movies', JSON.stringify(moviesList))
localStorage.setItem('savedmovies', JSON.stringify(savedMovies))



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
  carousel.scrollBy({ left: -300, behavior: "smooth" });
  setTimeout(() => Hovered = false, 2000);
});



//////////////////////////////////////// dark mode

const themeToggleButton = document.getElementById("theme-toggle");

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggleButton.textContent = "Dark";
  } else {
    document.body.classList.remove("light-mode");
    themeToggleButton.textContent = "Light";
  }
}

function toggleTheme() {

  document.body.classList.toggle("light-mode");

  const currentTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);

  themeToggleButton.textContent = currentTheme === "light" ? "Dark" : "Light";
}

themeToggleButton.addEventListener("click", toggleTheme);
applySavedTheme();


////////////////////////////////////

function displayMovies(moviesArray) {
  const moviesContainer = document.querySelector(".movies"); // The container for movies
  moviesContainer.innerHTML = ""; // Clear existing content

  moviesArray.forEach(movie => {
    const movieHTML = `
      <div class="item" data-title="${movie.title}">
        <i class="fa-regular fa-bookmark " style="color: #ffffff;">
          <a href="${movie.detailsUrl}">
          </a>
          
        </i>
        <img src="${movie.image}" alt="${movie.title}">
      </div>`;
    moviesContainer.innerHTML += movieHTML;
  });
}

// Call the function to display the movies
displayMovies(moviesList);

///// check if saved

const moviesContainer = document.querySelector('.movies')

moviesContainer.addEventListener('click', e => {
  const item = e.target.closest('.item')
  const saveddMovie = e.target.closest('.item i')
  const isSaved = savedMovies.some(saved => saved.title === item.dataset.title)
  if (!isSaved) {
      const aMovie = moviesList.find(e => e.title === item.dataset.title)
      saveddMovie.classList.remove('fa-regular')
      saveddMovie.classList.add('fa-solid')
      savedMovies.push(aMovie)
      localStorage.setItem('savedmovies', JSON.stringify(savedMovies))
    } else {
      const index = savedMovies.findIndex(e => e.title === item.dataset.title)
      saveddMovie.classList.remove('fa-solid')
      saveddMovie.classList.add('fa-regular')
      savedMovies.splice(index, 1)
      localStorage.setItem('savedmovies', JSON.stringify(savedMovies))
    }   
  } 
)

///////////////////////////////

let search = document.querySelector("input[type='search']")
let movies = document.querySelectorAll(".movies .item")
let slider = document.querySelector(".container")

search.addEventListener("input", (e) => {
  let text = e.target.value.toLowerCase()
  let isFound = false

  movies.forEach((item) => {
    let title = item.getAttribute('data-title').toLowerCase()

    if (title.includes(text)) {
      isFound = true
      item.style.display = ""
      document.querySelector(".container").style.display = "none"
    } else {
      document.querySelector(".container").style.display = ""
      item.style.display = "none"
    }

    if(text === "") {
      document.querySelector(".container").style.display = ""
    }
    if(text !== "") {
      document.querySelector(".container").style.display = "none"
    }
  })
  let nomovies = document.querySelector('.nomovies')
  nomovies.style.display = isFound ? "none" : "block";
})