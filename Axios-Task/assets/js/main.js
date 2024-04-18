import {
  getAllMovies,
  updateMovieById

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
                <a href="#" class="btn btn-outline-danger">Delete</a>
            </div>
        </div>
    </div>
</div>
        
        `;
  });
}



