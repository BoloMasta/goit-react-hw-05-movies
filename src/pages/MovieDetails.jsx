import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useMemo, Suspense } from 'react';
import { useRequest } from '../services/useRequest';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Loader } from '../components/Loader/Loader';
import { Button } from 'components/Buttons/Button';
import NotFound from './NotFound';
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
  const backLinkHref = useMemo(
    () => location.state?.from || '/',
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [movieId]
  );
  const [isImageLoaded, setIsImageLoaded] = useState({
    loaded: false,
    height: 0,
  });
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
    setIsImageLoaded({ loaded: true, height: 500 });
  };
  const setExtraPageHeight = e => {
    document.body.style.height = '1100px';
    e.currentTarget.blur();
  };

  return (
    <>
      {error && <NotFound />}
      {!data && !error ? (
        <Loader />
      ) : (
        data && (
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

            <ExtraButtonsList>
              <li>
                <ExtraButton to="cast">
                  <Button label="Cast" icon="cast" onClick={setExtraPageHeight} />
                </ExtraButton>
              </li>
              <li>
                <ExtraButton to="reviews">
                  <Button label="Reviews" icon="review" onClick={setExtraPageHeight} />
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
