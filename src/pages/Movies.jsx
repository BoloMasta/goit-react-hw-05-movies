import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Wrapper } from 'Styled/GlobalStyles';
import { SearchBox } from 'components/SearchBox';
import { MoviesList } from 'components/MoviesList';
import { PageButtons } from 'components/PageButtons';
import { useRequest } from '../services/useRequest';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const { data, error } = useRequest(
    '/search/movie',
    page,
    movieName || { query: '' }
  );

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  return (
    <Wrapper>
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
        <>
          <MoviesList movies={data.results} />

          {data.total_pages > 1 && (
            <PageButtons
              page={page}
              totalPages={data.total_pages}
              onPrevPage={() => setPage(page - 1)}
              onNextPage={() => setPage(page + 1)}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Movies;
