import Parser from 'html-react-parser';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import { Button } from 'components/SharedLayouts.styled';

import api from '../services/api';
import Loader from '../components/Loader/Loader';
import Button from 'components/Button';
// import Container from '../components/Container/Container';
import AdditionalInformation from '../components/AdditionalInformation/AdditionalInformation';
// import css from '../components/MovieCard/MovieCard.module.scss';

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
          {/* {overview !== '' &&
            ((<Header>Overview</Header>), (<Overview>{overview}</Overview>))}

          {genresList !== '' &&
            ((<Header>Genres</Header>), (<Genres>{genresList}</Genres>))}

          {productionCompaniesList !== '' &&
            ((<Header>Production companies</Header>),
            (
              <ProuctionCompanies>
                ,{Parser(productionCompaniesList.toString())}
              </ProuctionCompanies>
            ))} */}
        </Info>
      </MovieCard>

      <AdditionalInformation />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>

    // <Container>
    //   {isLoading && <Loader />}
    //   {error && <h1>Something went wrong. Try again later.</h1>}
    //   <Link to={backLinkHref}>
    //     <Button label="Go back" icon="left_arrow" />
    //   </Link>
    //   <div className={css.MovieCard}>
    //     <img src={posterUrl} alt={title} className={css.MovieCard__poster} />
    //     <div className={css.MovieCard__info}>
    //       <h2 className={css.MovieCard__title}>
    //         {title} ({release_date?.slice(0, 4)})
    //       </h2>
    //       <p className={css.MovieCard__score}>
    //         User score: {Math.round(vote_average * 10)}%&ensp;
    //         <span className={css.MovieCard__textdata}>
    //           ({vote_count} votes)
    //         </span>
    //       </p>
    //       <h3 className={css.MovieCard__header}>Overview</h3>
    //       <p className={css.MovieCard__textdata}>{overview}</p>
    //       <h3 className={css.MovieCard__header}>Genres</h3>
    //       <p className={css.MovieCard__textdata}>{genresList}</p>
    //       <h3 className={css.MovieCard__header}>Production companies</h3>
    //       <div className={css.MovieCard__textdata}>
    //         {Parser(productionCompaniesList.toString())}
    //       </div>
    //     </div>
    //   </div>
    //   <AdditionalInformation />
    // </Container>
  );
};

export default MovieDetails;
