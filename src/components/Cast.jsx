import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { Wrapper } from '../Styled/Cast';
import { CastList } from 'components/CastList';

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
    <Wrapper>
      {isLoading && <Loader />}
      {error && <h1>Something went wrong. Try again later.</h1>}
      <CastList cast={cast} />
    </Wrapper>
  );
};

export default Cast;
