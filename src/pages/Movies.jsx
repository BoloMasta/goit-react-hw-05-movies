import { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Wrapper } from 'components/GlobalStyles/GlobalStyles.styled';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageButtons } from 'components/Buttons/PageButtons';
import { useRequest } from '../services/useRequest';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const { data, error } = useRequest('/search/movie', page, movieName || { query: '' });

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  const handlePageChange = useCallback(
    page => {
      setPage(page);
    },
    [setPage]
  );

  return (
    <Wrapper>
      <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
        <SearchBox value={movieName} onChange={updateQueryString} />
        {error && <h2>failed to load</h2>}
        {!data && searchParams !== '' ? (
          <Skeleton count={15} style={{ height: 30, width: 300, marginTop: 15 }} />
        ) : data?.total_results === 0 && movieName && !error ? (
          <h2>No results found</h2>
        ) : (
          <>
            <MoviesList movies={data.results} />
            {data.total_pages > 1 && (
              <PageButtons
                page={page}
                totalPages={data.total_pages}
                handlePageChange={handlePageChange}
              />
            )}
          </>
        )}
      </SkeletonTheme>
    </Wrapper>
  );
};

export default Movies;
