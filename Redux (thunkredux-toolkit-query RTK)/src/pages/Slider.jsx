import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useGetMoviesQuery, useDeleteMovieMutation } from '../slices/moviesSlice';
import './Sliders.css';

const Sliders = () => {
  const navigation = useNavigate(); 
  const { data: movies, isLoading, isError } = useGetMoviesQuery();
  const [deleteMovie] = useDeleteMovieMutation();
  const [moviesList, setMoviesList] = useState([]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching movies</div>;
  const handleDelete = async (id) => {
    try {
      const response = await deleteMovie(id).unwrap();
  
      if (response.success) {
        console.log('Movie deleted successfully');
        setMoviesList(moviesList.filter(movie => movie.id !== id)); 
      } else {
        console.error('Failed to delete movie');
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const goToDetailPage = (id) => {
 
    const detailPageUrl = `/detail/${id}`;
   
    navigation.navigate(detailPageUrl);
  };
  
  return (
    <div className="slider-container">
      {/* Swiper slider */}
      {movies && movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          {/* Film Card */}
          <h2>{movie.title}</h2>
          <img src={movie.posterImg} alt={movie.title} className="poster-image" />
          <p>Release Year: {movie.releaseYear}</p>
          <p>Genre: {movie.genre}</p>
          {/* Detail and Delete buttons */}
          <div>
            <button onClick={() => goToDetailPage(movie.id)}>Detail</button>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sliders;
