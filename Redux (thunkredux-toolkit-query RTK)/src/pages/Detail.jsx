
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMoviesQuery } from '../slices/moviesSlice';

const Detail = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useGetMoviesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching movie</div>;

  return (
    <div>
      {/* Detail */}
      <h2>{movie.title}</h2>
      <img src={movie.posterImg} alt={movie.title} />
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      {/* Delete, edit ,go back  */}
    </div>
  );
};

export default Detail;
