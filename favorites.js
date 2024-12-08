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
//////////////////////////////////////////////////////////

//////////////////////////////////


const savedmovies = JSON.parse(localStorage.getItem('savedmovies')) || [];
console.log(savedmovies);  // Check what the data is

if (!Array.isArray(savedmovies)) {
  console.error("Error: 'savedmovies' is not an array.");
  
}


function displaySaved(savedmovies) {
  const mvcontainer = document.querySelector(".movies"); // The container for movies

  mvcontainer.innerHTML = ""; // Clear existing content

  if(!savedmovies || savedmovies.length === 0) {
    if (!document.querySelector('.noMovies')) {
      const pr = document.createElement('p');
      pr.textContent = 'No saved Movies Yet';
      pr.classList.add('noMovies');
      
      mvcontainer.appendChild(pr);
    }
  }

  savedmovies.forEach(movie => {
    const movieHTML = `
      <div class="item" data-title="${movie.title}">
        <i class="fa-solid fa-bookmark " style="color: #ffffff;">
          <a href="${movie.detailsUrl}">
          </a>
          
        </i>
        <img src="${movie.image}" alt="${movie.title}">
      </div>`;
    mvcontainer.innerHTML += movieHTML;
  });
}

displaySaved(savedmovies)

const moviesContainer = document.querySelector('.movies')

moviesContainer.addEventListener('click', e => {
  const item = e.target.closest('.item')
  const savedMovie = e.target.closest('.item i')
  if (!item || !savedMovie) return;
  const isSaved = savedmovies.some(saved => saved.title === item.dataset.title)
  if (isSaved) {
      const index = savedmovies.findIndex(e => e.title === item.dataset.title)
      savedmovies.splice(index, 1)
      localStorage.setItem('savedmovies', JSON.stringify(savedmovies))

    }   
    displaySaved(savedmovies)
  } 
  
)