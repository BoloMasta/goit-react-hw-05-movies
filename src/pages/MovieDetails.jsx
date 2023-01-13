import Parser from 'html-react-parser';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Loader } from '../components/Loader';
import { Button } from 'components/Button';
import api from '../services/api';

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
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState({
    loaded: false,
    maxHeight: 0,
  });

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const movie = await api.fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    overview,
    release_date,
    genres,
    production_companies,
  } = movieDetails || {};

  const defaultPoster = require('images/default_poster.jpg');
  const genresList = genres?.map(genre => genre.name).join(', ');
  const posterUrl =
    poster_path === null
      ? defaultPoster
      : `https://image.tmdb.org/t/p/w500${poster_path}`;

  if (posterUrl === 'https://image.tmdb.org/t/p/w500undefined') return;

  const productionCompaniesList = production_companies
    ?.map(company => {
      if (company.logo_path) {
        return `<img src="https://image.tmdb.org/t/p/w300${company.logo_path}" alt="${company.name}" style="max-height: 50px; max-width: 150px; padding: 10px 20px"/>`;
      } else {
        return '';
      }
    })
    .join('');

  const handleImageLoaded = () => {
    setIsImageLoaded({ loaded: true, maxHeight: 500 });
  };

  return (
    <Wrapper>
      {error && <h1>Something went wrong. Please try again later.</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackButton to={backLinkHref}>
            <Button label="Go back" icon="left_arrow" />
          </BackButton>
          <MovieCard>
            {!isImageLoaded.loaded && <Skeleton width={333} height={500} />}
            <Poster
              src={posterUrl}
              alt={title}
              onLoad={handleImageLoaded}
              height={isImageLoaded.maxHeight}
            />

            <Info>
              <Title>
                {title}
                {release_date && <span> ({release_date.slice(0, 4)})</span>}
              </Title>

              <Score>
                {vote_count > 0 ? (
                  <>
                    User score: {Math.round(vote_average * 10)}%&ensp;
                    <Votes>
                      ({vote_count} {vote_count === 1 ? 'vote' : 'votes'})
                    </Votes>
                  </>
                ) : (
                  'No votes yet'
                )}
              </Score>

              <Header>Overview</Header>
              <Overview>
                {overview !== '' ? overview : 'No overview provided'}
              </Overview>

              <Header>Genres</Header>
              <Genres>
                {genresList !== '' ? genresList : 'No genres provided'}
              </Genres>

              <Header>Production companies</Header>
              <ProuctionCompanies>
                {productionCompaniesList !== ''
                  ? Parser(productionCompaniesList.toString())
                  : 'No production companies provided'}
              </ProuctionCompanies>
            </Info>
          </MovieCard>
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
        </>
      )}
    </Wrapper>
  );
};

export default MovieDetails;
