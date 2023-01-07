import { useState, useEffect } from 'react';

import api from '../services/api';
import Loader from '../components/Loader/Loader';
import Container from '../components/Container/Container';
// import Navbar from '../components/Navbar/Navbar';
// import Button from '../components/Button/Button';
import MoviesList from '../components/MoviesList/MoviesList';
// import MovieCard from '../components/MovieCard/MovieCard';

//import { StyledNavLink } from '../components/App.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [movieId, setMovieId] = useState(null);
  // // const [movieDetails, setMovieDetails] = useState({});

  // const handleLinkClick = val => {
  //   // setMovieId(val);
  //   console.log(val);
  // };

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
      {/* <Navbar /> */}
      <Container>
        {isLoading && <Loader />}
        {error && <h1>Something went wrong. Try again later.</h1>}
        <MoviesList movies={movies} label="Trending movies:" />
      </Container>
    </>
  );
};

export default Home;
