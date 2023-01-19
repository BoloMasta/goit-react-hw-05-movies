// import Parser from 'html-react-parser';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useRequest } from '../services/useRequest';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Loader } from '../components/Loader';
import { Button } from 'components/Button';
import defaultPoster from 'images/default_poster.jpg';

import {
  Wrapper,
  BackButton,
  MovieCard,
  Poster,
  Info,
  Title,
  Score,
  Votes,
  Header,
  Overview,
  Genres,
  ProuctionCompanies,
  ExtraButtonsList,
  ExtraButton,
} from 'Styled/MovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data, error } = useRequest(`/movie/${movieId}`);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [isImageLoaded, setIsImageLoaded] = useState({
    loaded: false,
    height: 0,
  });
  const genresList = data?.genres.map(genre => genre.name).join(', ');
  const productionCompaniesList = data?.production_companies.map(
    ({ id, logo_path, name }) =>
      (logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{ maxHeight: 50, maxWidth: 200, marginRight: 30 }}
            />
          )}
        </li>
      )) ||
      ''
  );

  const handleImageLoaded = () => {
    setIsImageLoaded({ loaded: true, height: 500 });
  };

  const setExtraPageHeight = () => {
    console.log('pageHeight');
    document.body.style.height = '1100px';
  };

  useEffect(() => {
    return () => {
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <>
      {error && <h2>Something went wrong. Try again later.</h2>}
      {!data ? (
        <Loader />
      ) : (
        <Wrapper backdrop={data.backdrop_path}>
          <BackButton to={backLinkHref}>
            <Button label="Go back" icon="left_arrow" />
          </BackButton>
          <MovieCard>
            <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
              {!isImageLoaded.loaded && <Skeleton width={333} height={500} />}
            </SkeletonTheme>
            <Poster
              src={
                data.poster_path === null
                  ? defaultPoster
                  : `https://image.tmdb.org/t/p/w500${data.poster_path}`
              }
              alt={data.title}
              onLoad={handleImageLoaded}
              height={isImageLoaded.height}
            />
            <Info>
              <Title>
                {data.title}
                {data.release_date && (
                  <span> ({data.release_date.slice(0, 4)})</span>
                )}
              </Title>
              <Score>
                {data.vote_count > 0 ? (
                  <>
                    User score: {Math.round(data.vote_average * 10)}%&ensp;
                    <Votes>
                      ({data.vote_count}{' '}
                      {data.vote_count === 1 ? 'vote' : 'votes'})
                    </Votes>
                  </>
                ) : (
                  'No votes yet'
                )}
              </Score>
              <Header>Overview</Header>
              <Overview>
                {data.overview !== '' ? data.overview : 'No overview provided'}
              </Overview>
              <Header>Genres</Header>
              <Genres>
                {genresList !== '' ? genresList : 'No genres provided'}
              </Genres>
              <Header>Production companies</Header>
              <ProuctionCompanies>
                {productionCompaniesList.length > 0
                  ? productionCompaniesList
                  : 'No production companies provided'}
              </ProuctionCompanies>
            </Info>
          </MovieCard>

          <ExtraButtonsList>
            <li>
              <ExtraButton to="cast">
                <Button label="Cast" icon="cast" onClick={setExtraPageHeight} />
              </ExtraButton>
            </li>
            <li>
              <ExtraButton to="reviews">
                <Button
                  label="Reviews"
                  icon="review"
                  onClick={setExtraPageHeight}
                />
              </ExtraButton>
            </li>
          </ExtraButtonsList>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Wrapper>
      )}
    </>
  );
};

// const [movieDetails, setMovieDetails] = useState({});
// const [error, setError] = useState(null);
// const [isLoading, setIsLoading] = useState(false);
// const [isImageLoaded, setIsImageLoaded] = useState({
//   loaded: false,
//   maxHeight: 0,
// });

// const location = useLocation();
// const backLinkHref = location.state?.from ?? '/';

// useEffect(() => {
//   setIsLoading(true);
//   const getMovieDetails = async () => {
//     try {
//       const movie = await api.fetchMovieDetails(movieId);
//       setMovieDetails(movie);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   getMovieDetails();
// }, [movieId]);

// const {
//   poster_path,
//   title,
//   vote_average,
//   vote_count,
//   overview,
//   release_date,
//   genres,
//   production_companies,
// } = movieDetails || {};

// const genresList = genres?.map(genre => genre.name).join(', ');
// const posterUrl =
//   poster_path === null
//     ? defaultPoster
//     : `https://image.tmdb.org/t/p/w500${poster_path}`;

// if (posterUrl === 'https://image.tmdb.org/t/p/w500undefined') return;

// const productionCompaniesList = production_companies
//   ?.map(company => {
//     if (company.logo_path) {
//       return `<img src="https://image.tmdb.org/t/p/w300${company.logo_path}" alt="${company.name}" style="max-height: 50px; max-width: 150px; padding: 10px 20px"/>`;
//     } else {
//       return '';
//     }
//   })
//   .join('');

// const handleImageLoaded = () => {
//   setIsImageLoaded({ loaded: true, maxHeight: 500 });
// };

// return (
//   <Wrapper>
//     {error && <h1>Something went wrong. Please try again later.</h1>}
//     {isLoading ? (
//       <Loader />
//     ) : (
//       <>
//         <BackButton to={backLinkHref}>
//           <Button label="Go back" icon="left_arrow" />
//         </BackButton>
//         <MovieCard>
//           {!isImageLoaded.loaded && <Skeleton width={333} height={500} />}
//           <Poster
//             src={posterUrl}
//             alt={title}
//             onLoad={handleImageLoaded}
//             height={isImageLoaded.maxHeight}
//           />

//           <Info>
//             <Title>
//               {title}
//               {release_date && <span> ({release_date.slice(0, 4)})</span>}
//             </Title>

//             <Score>
//               {vote_count > 0 ? (
//                 <>
//                   User score: {Math.round(vote_average * 10)}%&ensp;
//                   <Votes>
//                     ({vote_count} {vote_count === 1 ? 'vote' : 'votes'})
//                   </Votes>
//                 </>
//               ) : (
//                 'No votes yet'
//               )}
//             </Score>

//             <Header>Overview</Header>
//             <Overview>
//               {overview !== '' ? overview : 'No overview provided'}
//             </Overview>

//             <Header>Genres</Header>
//             <Genres>
//               {genresList !== '' ? genresList : 'No genres provided'}
//             </Genres>

//             <Header>Production companies</Header>
//             <ProuctionCompanies>
//               {productionCompaniesList !== ''
//                 ? Parser(productionCompaniesList.toString())
//                 : 'No production companies provided'}
//             </ProuctionCompanies>
//           </Info>
//         </MovieCard>
//         <ExtraButtonsList>
//           <li>
//             <ExtraButton to="cast">
//               <Button label="Cast" icon="cast" />
//             </ExtraButton>
//           </li>
//           <li>
//             <ExtraButton to="reviews">
//               <Button label="Reviews" icon="review" />
//             </ExtraButton>
//           </li>
//         </ExtraButtonsList>

//           <Suspense fallback={<Loader />}>
//             <Outlet />
//           </Suspense>

//       </>
//     )}
//   </Wrapper>
// );

export default MovieDetails;
