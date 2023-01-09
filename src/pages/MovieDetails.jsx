import Parser from 'html-react-parser';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import api from '../services/api';
import { Loader } from '../components/Loader';
import { Button } from 'components/Button';
// import AdditionalInformation from '../components/AdditionalInformation/AdditionalInformation';

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
  }, [movieId, location, backLinkHref]);

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
        return ' ';
      }
    })
    .join('');

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {error && <h1>Something went wrong. Try again later.</h1>}

      <BackButton to={backLinkHref}>
        <Button label="Go back" icon="left_arrow" />
      </BackButton>

      <MovieCard>
        <Poster src={posterUrl} alt={title} />
        <Info>
          <Title>
            {title}
            {release_date && <span> ({release_date.slice(0, 4)})</span>}
          </Title>

          {vote_count > 0 ? (
            <Score>
              User score: {Math.round(vote_average * 10)}%&ensp;
              <Votes>
                ({vote_count} {vote_count === 1 ? 'vote' : 'votes'})
              </Votes>
            </Score>
          ) : (
            <Score>No votes yet</Score>
          )}

          <Header>Overview</Header>
          {overview !== '' ? (
            <Overview>{overview}</Overview>
          ) : (
            <Overview>No overview provided</Overview>
          )}

          <Header>Genres</Header>
          {genresList !== '' ? (
            <Genres>{genresList}</Genres>
          ) : (
            <Genres>No genres provided</Genres>
          )}

          <Header>Production companies</Header>
          {productionCompaniesList !== '' ? (
            <ProuctionCompanies>
              {Parser(productionCompaniesList.toString())}
            </ProuctionCompanies>
          ) : (
            <ProuctionCompanies>
              No production companies provided
            </ProuctionCompanies>
          )}
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
    </Wrapper>
  );
};

export default MovieDetails;
