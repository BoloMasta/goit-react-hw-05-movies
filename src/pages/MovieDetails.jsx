import { useParams, useLocation, Navigate, Outlet } from 'react-router-dom';
import { useState, useRef, Suspense } from 'react';
import { useRequest } from '../services/useRequest';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Loader } from '../components/Loader/Loader';
import { Button } from 'components/Buttons/Button';
import defaultPoster from 'images/default_poster.jpg';

import {
  Wrapper,
  BackButton,
  MovieCard,
  Poster,
  Info,
  Title,
  Score,
  Header,
  TextData,
  ProuctionCompanies,
  ExtraButtonsList,
  ExtraButton,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data, error } = useRequest(`/movie/${movieId}`);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const genresList = data?.genres?.map(genre => genre.name).join(', ');
  const productionCompaniesList = data?.production_companies?.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{ maxHeight: 50, maxWidth: 200, marginRight: 30 }}
            />
          )}
        </li>
      )
  );
  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {error && <Navigate to="/" />}
      {!data && !error ? (
        <Loader />
      ) : (
        data && (
          <Wrapper backdrop={data.backdrop_path}>
            <BackButton to={backLinkHref.current}>
              <Button label="Go back" icon="left_arrow" />
            </BackButton>

            {/* ===== MOVIE CARD ===== */}
            <MovieCard>
              {/* ===== POSTER ===== */}
              <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
                {!isImageLoaded && <Skeleton width={333} height={500} />}
              </SkeletonTheme>
              <Poster
                src={
                  data.poster_path === null
                    ? defaultPoster
                    : `https://image.tmdb.org/t/p/w500${data.poster_path}`
                }
                alt={data.title}
                onLoad={handleImageLoaded}
                height={isImageLoaded ? 500 : 0}
              />

              {/* ===== MOVIE INFO ===== */}
              <Info>
                <Title>
                  {data.title}
                  {data.release_date && <span> ({data.release_date.slice(0, 4)})</span>}
                </Title>
                <Score>
                  {data.vote_count > 0 ? (
                    <>
                      User score: {Math.round(data.vote_average * 10)}%&ensp;
                      <TextData>
                        ({data.vote_count} {data.vote_count === 1 ? 'vote' : 'votes'})
                      </TextData>
                    </>
                  ) : (
                    'No votes yet'
                  )}
                </Score>
                <Header>Overview</Header>
                <TextData>{data.overview !== '' ? data.overview : 'No overview provided'}</TextData>
                <Header>Genres</Header>
                <TextData>{genresList !== '' ? genresList : 'No genres provided'}</TextData>
                {productionCompaniesList[0] !== null && productionCompaniesList.length > 0 && (
                  <>
                    <Header>Production companies</Header>
                    <ProuctionCompanies>{productionCompaniesList}</ProuctionCompanies>
                  </>
                )}
              </Info>
            </MovieCard>

            {/* ===== EXTRA BUTTONS ===== */}
            <ExtraButtonsList>
              <li>
                <ExtraButton to="cast">
                  <Button label="Cast" icon="cast" />
                </ExtraButton>
              </li>
              <li>
                <ExtraButton to="reviews">
                  <Button label="Reviews" icon="review" />
                </ExtraButton>
              </li>
            </ExtraButtonsList>

            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Wrapper>
        )
      )}
    </>
  );
};

export default MovieDetails;
