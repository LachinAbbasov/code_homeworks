import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://json-server-vercel-theta-two.vercel.app/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => 'movies',
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `movies/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useDeleteMovieMutation } = moviesApi;
