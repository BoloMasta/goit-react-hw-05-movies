import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  Wrapper,
  Header,
} from '../components/GlobalStyles/GlobalStyles.styled';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { PageButtons } from 'components/Buttons/PageButtons';
import { useRequest } from '../services/useRequest';
import propTypes from 'prop-types';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, error } = useRequest(`/trending/movie/day`, page);

  return (
    <Wrapper>
      {error && <h2>Something went wrong. Try again later.</h2>}
      <Header>Trending movies:</Header>
      <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
        {!data ? (
          <Skeleton
            count={15}
            style={{ height: 30, width: 300, marginTop: 15 }}
          />
        ) : (
          <>
            <MoviesList movies={data.results} />
            <PageButtons
              page={page}
              totalPages={data.total_pages}
              onPrevPage={() => setPage(page - 1)}
              onNextPage={() => setPage(page + 1)}
            />
          </>
        )}
      </SkeletonTheme>
    </Wrapper>
  );
};

export default Home;

Home.propTypes = {
  page: propTypes.number,
  setPage: propTypes.func,
  data: propTypes.object,
  error: propTypes.object,
};
