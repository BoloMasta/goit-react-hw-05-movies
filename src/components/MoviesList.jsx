import { useLocation } from 'react-router-dom';
import {
  Wrapper,
  Header,
  List,
  Item,
  LinkToDetails,
} from '../Styled/MoviesList.styled';

const MoviesList = ({ movies, label }) => {
  const location = useLocation();

  return (
    <Wrapper>
      <Header>{label}</Header>
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

export default MoviesList;
