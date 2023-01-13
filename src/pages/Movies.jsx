import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';

import { SearchBox } from 'components/SearchBox';
import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';
import api from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [noResults, setNoResults] = useState(false);
  const movieName = searchParams.get('query') || '';

  const updateQueryString = e => {
    // setMovieName(e.target.value);
    setNoResults(false);
    setSearchParams({ query: e.target.value });
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
      <SearchBox value={movieName} onChange={updateQueryString} />
      {isLoading && <Loader />}
      {error && <h1>Something went wrong. Try again later.</h1>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {noResults && <h2>No results found</h2>}

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
