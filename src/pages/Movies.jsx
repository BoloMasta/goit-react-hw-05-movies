import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchBox } from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import api from 'services/api';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryString = e => {
    setMovieName(e.target.value);
  };

  const handleSubmit = e => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const { results } = await api.fetchMoviesByQuery(movieName);
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
    setSearchParams({ query: movieName });
  };

  return (
    <>
      <h1>Movies</h1>
      <SearchBox
        value={movieName}
        onChange={updateQueryString}
        handleSubmit={handleSubmit}
      />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong. Try again later.</h1>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
