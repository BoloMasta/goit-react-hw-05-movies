import { useState, useEffect } from 'react';

import api from '../services/api';

import Navbar from './Navbar/Navbar';
import Loader from './Loader/Loader';
import MoviesList from './MoviesList/MoviesList';
import MovieCard from './MovieCard/MovieCard';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  const [movieId, setMovieId] = useState(null);
  const [movieDetails, setMovieDetails] = useState({});
  // const [movieCast, setMovieCast] = useState([]);
  // const [movieReviews, setMovieReviews] = useState([]);

  const handleLinkClick = val => {
    setMovieId(val);
  };

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

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const data = await api.fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <Navbar />
      {movieId ? (
        <MovieCard movie={movieDetails} />
      ) : (
        <MoviesList
          movies={movies}
          label="Trending movies:"
          handleLinkClick={handleLinkClick}
        />
      )}
      {error && <h1>Oops, something went wrong: {error.message}</h1>}
      {isLoading && <Loader />}
    </>
  );
};
