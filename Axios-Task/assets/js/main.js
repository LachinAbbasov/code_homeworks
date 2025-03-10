import {
  getAllMovies,
deleteMovie,

} from "./API/requests/movie_requets.js";
import API_URL from "./API/base_url.js";

getAllMovies(API_URL).then((res) => {
  console.log(res);
});
const moviecard = document.getElementById("moviecard");

getAllMovies(API_URL).then((res) => {
  renderUI(res.name);
});
function renderUI(arr) {
  moviecard.innerHTML = "";
 
      arr.forEach((movieID) => {
        moviecard.innerHTML += `
    <div class="col-md-3 movieID" >
    <div class="card mt-5">
        <img src="${movieID.poster}" class="card-img-top" height="300px" width="100px" alt="...">
        <div class="card-body">
            <h5 class="card-title">Title:${movieID.title}</h5>
            <p class="card-text">Genre:${movieID.genre}</p>
         
            <div class="d-grid gap-2">
                <a href="detail.html" class="btn btn-outline-primary">Info</a>
                <a href="#"  class="btn btn-outline-warning editbtn">Edit</a>
                <a  href="#" class="btn btn-outline-danger delete-btn">Delete</a>
            </div>
        </div>
    </div>
</div>
        
        `});

    };


 
    card.querySelector('.delete-btn').addEventListener('click', (event) => {
      event.stopPropagation();
      deleteMovie(movie.id); 
    });
    
    async function deleteMovie(movieId) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this movie!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await deleteButton(API_URL, movieId);
            if (response) {
              Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Movie has been deleted.',
                showConfirmButton: false,
                timer: 1500
              });
              const movieCard = document.querySelector(`.movie-card[data-id="${movieId}"]`);
              movieCard.remove();
            } else {
              throw new Error('Movie deletion failed.');
            }
          } catch (error) {
            console.error('Error deleting movie:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            });
          }
        }
      });
    }
    