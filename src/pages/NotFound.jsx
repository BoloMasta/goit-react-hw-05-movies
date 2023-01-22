import { Wrapper, Header, Paragraph, StyledLink } from '../components/Pages.styled/NotFound.styled';
import { Button } from 'components/Buttons/Button';

const NotFound = () => {
  return (
    <Wrapper>
      <Header>404 Not Found</Header>
      <Paragraph>Sorry, the page you are looking for doesn't exist.</Paragraph>
      <StyledLink to="/">
        <Button label="Go to home page" icon="filmTape" />
      </StyledLink>
    </Wrapper>
  );
};

export default NotFound;
