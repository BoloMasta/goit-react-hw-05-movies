import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Wrapper, List, Item, Author, Content } from '../Styled/Reviews';
import { useRequest } from '../services/useRequest';

const Reviews = () => {
  const { movieId } = useParams();
  const { data, error } = useRequest(`/movie/${movieId}/reviews`);

  return (
    <>
      {error && <h2>Something went wrong. Try again later.</h2>}
      {!data ? (
        <>
          <Skeleton style={{ height: 30, width: 250, marginBottom: 15 }} />
          <Skeleton
            count={3}
            style={{ height: 20, width: 600, marginBottom: 5 }}
          />
        </>
      ) : data.results.length === 0 ? (
        <h2>We don't have any reviews for this movie.</h2>
      ) : (
        <Wrapper>
          <List>
            {data.results.map(({ id, author, content }) => (
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
