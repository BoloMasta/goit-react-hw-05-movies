import { useState, useEffect } from 'react';

import { Loader } from '../components/Loader';
import { MoviesList } from '../components/MoviesList';
import api from '../services/api';

const Home = () => {
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
      {isLoading && <Loader />}
      {error && <h1>Something went wrong. Try again later.</h1>}
      <MoviesList movies={movies} label="Trending movies:" />
    </>
  );
};

export default Home;
