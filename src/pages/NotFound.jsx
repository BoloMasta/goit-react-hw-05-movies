import {
  Wrapper,
  Header,
  Paragraph,
} from '../components/Pages/NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <Header>404 Not Found</Header>
      <Paragraph>Sorry, the page you are looking for does not exist.</Paragraph>
    </Wrapper>
  );
};

export default NotFound;
