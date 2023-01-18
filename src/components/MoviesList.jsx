import { useLocation } from 'react-router-dom';
import { Wrapper, List, Item, LinkToDetails } from '../Styled/MoviesList';

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
            >
              {movie.title}
            </LinkToDetails>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
