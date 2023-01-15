import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Wrapper, Header } from '../Styled/Home';
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
    console.log('test23456789');
  }, []);

  return (
    <Wrapper>
      <Header>Trending movies:</Header>
      {isLoading ? (
        <Skeleton
          count={15}
          style={{ height: 30, width: 300, marginTop: 15 }}
        />
      ) : (
        <>
          <MoviesList movies={movies} />
        </>
      )}
      {error && <h1>Something went wrong. Try again later.</h1>}
    </Wrapper>
  );
};

export default Home;
