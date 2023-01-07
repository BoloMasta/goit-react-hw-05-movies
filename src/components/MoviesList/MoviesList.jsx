import { Link } from 'react-router-dom';
import css from './MoviesList.module.scss';

const MoviesList = ({ movies, label }) => (
  <div className={css.MoviesList}>
    <h2 className={css.MoviesList__label}>{label}</h2>
    <ul className={css.MoviesList__list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.MoviesList__item}>
          <Link to={`/movies/${movie.id}`} className={css.MoviesList__link}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MoviesList;
