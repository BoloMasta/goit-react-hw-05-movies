import css from './MovieCard.module.scss';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview, release_date } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  // const genresList = genres.map(genre => genre.name).join(', ');

  if (posterUrl === 'https://image.tmdb.org/t/p/w500undefined')
    return 'https://www.reelviews.net/resources/img/default_poster.jpg';

  return (
    <div className={css.MovieCard}>
      <img src={posterUrl} alt={title} className={css.MovieCard__poster} />
      <div className={css.MovieCard__info}>
        <h2 className={css.MovieCard__title}>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p className={css.MovieCard__score}>
          User score: {Math.round(vote_average * 10)}%
        </p>
        <h3 className={css.MovieCard__subtitle}>Overview</h3>
        <p className={css.MovieCard__overview}>{overview}</p>
        <h3 className={css.MovieCard__subtitle}>Genres</h3>
      </div>
    </div>
  );
};

export default MovieCard;
