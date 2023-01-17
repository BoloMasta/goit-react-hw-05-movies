// import { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { SearchBox } from 'components/SearchBox';
import { MoviesList } from 'components/MoviesList';
// import { ErrorBoundary } from 'components/ErrorBoundary';
import { useRequest } from '../services/useRequest';
// import api from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? { query: '' };
  const { data, error } = useRequest('/search/movie', movieName);

  // const updateQueryString = e => {
  //   setSearchParams({ query: e.target.value });
  //   console.log(searchParams.get('query'));
  // };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    console.log(nextParams);
    setSearchParams(nextParams);
  };

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <Skeleton count={15} style={{ height: 30, width: 300, marginTop: 15 }} />
    );

  return (
    <>
      <SearchBox value={movieName.query} onChange={updateQueryString} />
      <MoviesList movies={data.results} />
    </>
  );
};

//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [noResults, setNoResults] = useState(false);
//   const movieName = searchParams.get('query') || '';

//   const updateQueryString = e => {
//     setNoResults(false);
//     setSearchParams({ query: e.target.value });
//   };

//   useEffect(() => {
//     if (searchParams.get('query')) {
//       setIsLoading(true);
//       const getMovies = async () => {
//         try {
//           const { results } = await api.fetchMoviesByQuery(
//             searchParams.get('query')
//           );
//           results.length === 0 && setNoResults(true);
//           setMovies(results);
//         } catch (error) {
//           setError(error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       getMovies();
//     }
//   }, [searchParams]);

//   return (
//     <>
//       <SearchBox value={movieName} onChange={updateQueryString} />

//       {error && <h1>Something went wrong. Try again later.</h1>}
//       {noResults && <h2>No results found</h2>}
//       {isLoading ? (
//         <Skeleton
//           count={15}
//           style={{ height: 30, width: 300, marginTop: 15 }}
//         />
//       ) : (
//         <MoviesList movies={movies} />
//       )}

//       <ErrorBoundary>
//         <Suspense fallback={<div>Loading subpage...</div>}>
//           <Outlet />
//         </Suspense>
//       </ErrorBoundary>
//     </>
//   );
// };

export default Movies;
