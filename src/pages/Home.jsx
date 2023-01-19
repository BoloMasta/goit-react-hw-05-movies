// import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Wrapper, Header } from '../Styled/GlobalStyles';
import { MoviesList } from '../components/MoviesList';
import { PageButtons } from 'components/PageButtons';

import { useRequest } from '../services/useRequest';
import { useState } from 'react';
// import api from '../services/api';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, error } = useRequest(`/trending/movie/day`, page);

  // const onPrevPage = () => {
  //   setPage(page - 1);
  // };

  // const onNextPage = () => {
  //   setPage(page + 1);
  //   console.log(page);
  // };

  // if (error) return <div>failed to load</div>;
  // if (!data)
  //   return (
  //     <Skeleton count={15} style={{ height: 30, width: 300, marginTop: 15 }} />
  //   );

  // console.log(data);

  return (
    <Wrapper>
      {error && <h2>Something went wrong. Try again later.</h2>}
      <Header>Trending movies:</Header>
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
    </Wrapper>
  );

  // const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const getMovies = async () => {
  //     try {
  //       const { results } = await api.fetchTrendingMovies();
  //       setMovies(results);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getMovies();
  // }, []);

  // return (
  //   <Wrapper>
  //     <Header>Trending movies:</Header>
  //     {isLoading ? (
  //       <Skeleton
  //         count={15}
  //         style={{ height: 30, width: 300, marginTop: 15 }}
  //       />
  //     ) : (
  //       <>
  //         <MoviesList movies={movies} />
  //       </>
  //     )}
  //     {error && <h1>Something went wrong. Try again later.</h1>}
  //   </Wrapper>
  // );
};

export default Home;
