const baseUrl = "https://ghibliapi.vercel.app";

const ContainerList = document.querySelector(".data-movie-list");

const displayMovie = (movie) => {
  ContainerList.innerHTML += `<div class="movie-card">
    <img
      width="262px"
      height="320px"
      src=${movie.image}
      alt=${movie.title}
    />
    <h4 class="title">${movie.title}</h4>
    <div class="informations-card">
      <span>Rate: ${movie.rt_score / 10}</span>
      <p class="description">
         ${movie.description}
      </p>
    </div>
  </div>`;
};

const getMovies = async () => {
  const skeleton = document.getElementById("skeleton-load");
  const enoughData = document.getElementById("enough-data")
  try {
    const response = await fetch(baseUrl + "/films");
    const movies = await response.json();
    movies.splice(12).map(displayMovie);
  } catch (error) {
    console.error("Error fetching movies:", error);
    skeleton.style.display = "none";
    enoughData.style.display = "block"
  } finally {
    skeleton.style.display = "none";
  }
};

window.addEventListener("load", () => {
  getMovies();
});
