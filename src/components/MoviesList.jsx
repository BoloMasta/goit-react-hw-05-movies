import { useLocation } from 'react-router-dom';
import { Wrapper, List, Item, LinkToDetails } from '../Styled/MoviesList';
import propTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Wrapper>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <LinkToDetails
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              cover={movie.poster_path}
            >
              {movie.title}
            </LinkToDetails>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      poster_path: propTypes.string,
    })
  ),
};
