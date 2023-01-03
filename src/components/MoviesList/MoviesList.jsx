import css from './MoviesList.module.scss';

const MoviesList = ({ movies, label, handleLinkClick }) => (
  <div className={css.MoviesList}>
    <h2 className={css.MoviesList__label}>{label}</h2>
    <ul className={css.MoviesList__list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.MoviesList__item}>
          <a
            href="#"
            className={css.MoviesList__link}
            onClick={() => handleLinkClick(movie.id)}
          >
            {movie.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default MoviesList;
