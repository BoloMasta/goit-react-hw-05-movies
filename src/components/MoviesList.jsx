import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

const List = styled.ul`
  list-style: outside '🎞️';
`;

const Item = styled.li`
  padding: 6px 12px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        rgb(255, 255, 255) 0%,
        darkblue 5%,
        rgb(255, 255, 255) 30%
      )
      border-box;
  border-bottom: 1px solid transparent;
`;

const LinkToDetails = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 1px;

  &:hover,
  &:focus {
    color: #ff3cac;
  }
`;

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
