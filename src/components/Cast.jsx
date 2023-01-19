import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Wrapper, List, Item, Image, Name, Character } from '../Styled/Cast';
import { useRequest } from '../services/useRequest';
import defaultCastPoster from '../images/default_cast.jpg';

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
  const { data, error } = useRequest(`/movie/${movieId}/credits`);

  useEffect(() => {
    if (data) {
      const castWithLoadedProp = data.cast.map(castMember => ({
        ...castMember,
        loaded: false,
      }));
      dispatch({ type: 'SET_CAST', payload: castWithLoadedProp });
    }
  }, [data]);

  const handleCastImageLoaded = e => {
    const castMemberId = Number(e.target.dataset.id);
    dispatch({ type: 'SET_LOADED', payload: castMemberId });
  };

  console.log(cast);

  return (
    <>
      {error && <h2>Something went wrong. Try again later.</h2>}
      {!data ? (
        <Wrapper>
          <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
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
          </SkeletonTheme>
        </Wrapper>
      ) : (
        <>
          {cast.length === 0 && !data ? (
            <h2>We don't have any cast for this movie.</h2>
          ) : (
            <Wrapper>
              <List>
                {cast.map(({ id, profile_path, name, character, loaded }) => (
                  <Item key={id}>
                    <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
                      {!loaded && <Skeleton width={150} height={195} />}
                      <Image
                        src={
                          profile_path
                            ? `https://image.tmdb.org/t/p/w500${profile_path}`
                            : defaultCastPoster
                        }
                        alt={name}
                        data-id={id}
                        onLoad={handleCastImageLoaded}
                        height={loaded ? 200 : 0}
                        width={loaded ? 150 : 0}
                      />
                      <Name>{name}</Name>
                      <Character>{character}</Character>
                    </SkeletonTheme>
                  </Item>
                ))}
              </List>
            </Wrapper>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
