import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { Wrapper, List, Item, Image, Name, Character } from '../Styled/Cast';
import api from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCast = async () => {
      try {
        const { cast } = await api.fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>Something went wrong. Try again later.</h2>}
      {cast.length === 0 && !isLoading ? (
        <h2>We don't have any cast for this movie.</h2>
      ) : (
        <Wrapper>
          <List>
            {cast.map(({ id, profile_path, name, character }) => (
              <Item key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : 'https://dummyimage.com/200x300/2a2a2a/ffffff&text=No+image'
                  }
                  alt={name}
                />
                <Name>{name}</Name>
                <Character>Character: {character}</Character>
              </Item>
            ))}
          </List>
          {cast.length === 0 && !isLoading && (
            <h2>We don't have any cast for this movie.</h2>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Cast;
