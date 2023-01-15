import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Wrapper, List, Item, Image, Name, Character } from '../Styled/Cast';
import api from 'services/api';

const castReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CAST':
      return action.payload;
    case 'SET_LOADED':
      return state.map(castMember =>
        castMember.id === action.payload
          ? { ...castMember, loaded: true }
          : castMember
      );
    default:
      return state;
  }
};

const Cast = () => {
  const { movieId } = useParams();
  const [cast, dispatch] = useReducer(castReducer, []);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCast = async () => {
      try {
        const { cast } = await api.fetchMovieCast(movieId);
        const castWithLoadedProp = cast.map(castMember => ({
          ...castMember,
          loaded: false,
        }));
        dispatch({ type: 'SET_CAST', payload: castWithLoadedProp });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  const handleCastImageLoaded = e => {
    const castMemberId = Number(e.target.dataset.id);
    dispatch({ type: 'SET_LOADED', payload: castMemberId });
  };

  return (
    <>
      {error && <h2>Something went wrong. Try again later.</h2>}
      {isLoading && (
        <Wrapper>
          <List>
            <Item>
              <Skeleton width={150} height={200} inline={true} />
              <Name>
                <Skeleton width={200} height={50} inline={true} />
              </Name>
              <Character>
                <Skeleton width={400} height={50} inline={true} />
              </Character>
            </Item>
          </List>
        </Wrapper>
      )}

      {!isLoading && !error && (
        <>
          {cast.length === 0 && !isLoading ? (
            <h2>We don't have any cast for this movie.</h2>
          ) : (
            <Wrapper>
              <List>
                {cast.map(({ id, profile_path, name, character, loaded }) => (
                  <Item key={id}>
                    {!loaded && <Skeleton width={150} height={195} />}
                    <Image
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w500${profile_path}`
                          : 'https://dummyimage.com/200x300/2a2a2a/ffffff&text=No+image'
                      }
                      alt={name}
                      data-id={id}
                      onLoad={handleCastImageLoaded}
                      height={loaded ? 200 : 0}
                      width={loaded ? 150 : 0}
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
      )}
    </>
  );
};

export default Cast;
