import { useNavigate } from 'react-router-dom';
import { Wrapper, Header, Paragraph } from '../components/Pages/NotFound.styled';
import { Button } from 'components/Buttons/Button';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomePage = () => navigate('/');

  return (
    <Wrapper>
      <Header>404 Not Found</Header>
      <Paragraph>Sorry, the page you are looking for does not exist.</Paragraph>
      <Button label="Go to home page" icon="filmTape" onClick={() => onHomePage()} />
    </Wrapper>
  );
};

export default NotFound;
