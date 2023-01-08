import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { SearchBox } from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import { Loader } from 'components/Loader';
import api from 'services/api';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [noResults, setNoResults] = useState(false);

  const updateQueryString = e => {
    setMovieName(e.target.value);
  };

  const handleSubmit = e => {
    setNoResults(false);
    setSearchParams({ query: movieName });
  };

  useEffect(() => {
    if (searchParams.get('query')) {
      setIsLoading(true);
      const getMovies = async () => {
        try {
          const { results } = await api.fetchMoviesByQuery(
            searchParams.get('query')
          );
          results.length === 0 && setNoResults(true);
          setMovies(results);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      getMovies();
    }
  }, [searchParams]);

  return (
    <>
      <h1>Movies</h1>
      <SearchBox
        value={movieName}
        onChange={updateQueryString}
        handleSubmit={handleSubmit}
      />
      {isLoading && <Loader />}
      {error && <h1>Something went wrong. Try again later.</h1>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {noResults && <h2>No results found</h2>}
    </>
  );
};

export default Movies;
