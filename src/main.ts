import 'bootstrap/dist/css/bootstrap.css';
import { Movie } from "./Movie";

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector('tbody')!;

  

  const movies: Movie[] = [
    new Movie("The Godfather", 175, ["Crime", "Drama"]),
    new Movie("The Dark Knight", 152, ["Action", "Crime", "Drama"]),
    new Movie("The Shawshank Redemption", 142, ["Drama"]),
    new Movie("Taxi Driver", 113, ["Crime", "Drama"])
  ];

  function displayMovies(movie: Movie) {
    const tr = document.createElement("tr");

    const tdTitle = document.createElement('td');
    tdTitle.innerHTML = movie.title;
    tr.appendChild(tdTitle);

    const tdDuration = document.createElement('td');
    tdDuration.innerHTML = movie.duration.toString();
    tr.appendChild(tdDuration);

    const tdGenre = document.createElement('td');
    tdGenre.innerHTML = movie.genre.join(", ");
    tr.appendChild(tdGenre);

    tbody.appendChild(tr);
  }

  function reloadTable() {
    tbody.innerHTML = '';
    movies.forEach(displayMovies);
  }


  reloadTable();

 
  const form = document.querySelector('form')!;
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleInput = document.querySelector('#title') as HTMLInputElement;
    const durationInput = document.querySelector('#duration') as HTMLInputElement;
    const genresInput = document.querySelector('#genres') as HTMLInputElement;

    const newMovie = new Movie(titleInput.value, parseInt(durationInput.value), genresInput.value.split(', '));
    movies.push(newMovie);

    reloadTable();

    titleInput.value = '';
    durationInput.value = '';
    genresInput.value = '';
  });
});


