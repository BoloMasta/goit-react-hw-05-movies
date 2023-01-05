import css from './MovieCard.module.scss';
import Parser from 'html-react-parser';

import Button from 'components/Button/Button';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    overview,
    release_date,
    genres,
    production_companies,
    id,
  } = movie;
  const genresList = genres
    ?.map(genre => {
      if (genre.name) return;
    })
    .join(', ');
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  if (posterUrl === 'https://image.tmdb.org/t/p/w500undefined')
    return require('../../images/default_poster.jpg');
  const productionCompaniesList = production_companies
    ?.map(company => {
      if (company.logo_path) {
        return `<img src="https://image.tmdb.org/t/p/w300${company.logo_path}" alt="${company.name}" style="max-height: 50px; max-width: 150px; padding: 10px 20px"/>`;
      }
    })
    .join('');

  return (
    <>
      <Button label="Go back" icon="left_arrow" />
      <div className={css.MovieCard}>
        <img src={posterUrl} alt={title} className={css.MovieCard__poster} />
        <div className={css.MovieCard__info}>
          <h2 className={css.MovieCard__title}>
            {title} ({release_date?.slice(0, 4)})
          </h2>
          <p className={css.MovieCard__score}>
            User score: {Math.round(vote_average * 10)}%&ensp;
            <span className={css.MovieCard__textdata}>
              ({vote_count} votes)
            </span>
          </p>
          <h3 className={css.MovieCard__header}>Overview</h3>
          <p className={css.MovieCard__textdata}>{overview}</p>
          <h3 className={css.MovieCard__header}>Genres</h3>
          <p className={css.MovieCard__textdata}>{genresList}</p>
          <h3 className={css.MovieCard__header}>Production companies</h3>
          <div className={css.MovieCard__productionCompaniesList}>
            {Parser(productionCompaniesList)}
          </div>
        </div>
      </div>
      <AdditionalInformation id={id} />
    </>
  );
};

export default MovieCard;
