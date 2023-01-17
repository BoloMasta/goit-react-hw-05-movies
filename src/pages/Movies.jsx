import { useSearchParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { SearchBox } from 'components/SearchBox';
import { MoviesList } from 'components/MoviesList';
import { useRequest } from '../services/useRequest';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const { data, error } = useRequest(
    '/search/movie',
    movieName || { query: '' }
  );

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBox value={movieName} onChange={updateQueryString} />
      {error && <h2>failed to load</h2>}
      {!data ? (
        <Skeleton
          count={15}
          style={{ height: 30, width: 300, marginTop: 15 }}
        />
      ) : data?.total_results === 0 && movieName && !error ? (
        <h2>No results found</h2>
      ) : (
        <MoviesList movies={data.results} />
      )}
    </>
  );
};

export default Movies;
