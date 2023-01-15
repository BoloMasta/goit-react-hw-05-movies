import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Wrapper, List, Item, Author, Content } from '../Styled/Reviews';
import api from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async () => {
      try {
        const { results } = await api.fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {error && <h2>Something went wrong. Try again later.</h2>}
      {reviews.length === 0 && !isLoading && (
        <h2>We don't have any reviews for this movie.</h2>
      )}

      {isLoading && (
        <Wrapper>
          <List>
            <Item>
              <Author>
                <Skeleton width={100} />
              </Author>
              <Content>
                <Skeleton width={500} count={3} />
              </Content>
            </Item>
          </List>
        </Wrapper>
      )}

      {!isLoading && reviews.length > 0 && !error && (
        <Wrapper>
          <List>
            {reviews.map(({ id, author, content }) => (
              <Item key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </Item>
            ))}
          </List>
        </Wrapper>
      )}
    </>
  );
};

export default Reviews;
