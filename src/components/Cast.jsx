import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// import { Loader } from 'components/Loader';
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
      {error && <h2>Something went wrong. Try again later.</h2>}
      {isLoading ? (
        // <table style={{ borderSpacing: 30 }}>
        //   <tr>
        //     <td>
        //       <Skeleton width={150} height={200} inline={true} />
        //     </td>
        //     <td>
        //       <Skeleton width={200} height={50} inline={true} />
        //     </td>
        //     <td>
        //       <Skeleton width={400} height={50} inline={true} />
        //     </td>
        //   </tr>
        // </table>

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
      ) : (
        <>
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
      )}
    </>
  );
};

export default Cast;
