import { useState, useEffect } from 'react';

import api from '../services/api';
import Loader from '../components/Loader/Loader';
import Container from '../components/Container/Container';
import MoviesList from '../components/MoviesList';

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
    <Container>
      {isLoading && <Loader />}
      {error && <h1>Something went wrong. Try again later.</h1>}
      <MoviesList movies={movies} label="Trending movies:" />
    </Container>
  );
};

export default Home;
