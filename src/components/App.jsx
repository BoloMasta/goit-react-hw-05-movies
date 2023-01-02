import { useState, useEffect } from 'react';

import api from '../services/api';

import MoviesList from './MoviesList/MoviesList';
import Loader from './Loader/Loader';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const { results } = await api.fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
      {error && <h1>Oops, something went wrong: {error.message}</h1>}
      {isLoading && <Loader />}
    </>
  );
};
