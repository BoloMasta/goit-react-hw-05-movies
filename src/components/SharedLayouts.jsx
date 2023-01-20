import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from '../Styled/SharedLayouts';
import { Loader } from './Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <nav>
          <Link to="/" end onClick={e => e.currentTarget.blur()}>
            Home
          </Link>
          <Link to="/movies" onClick={e => e.currentTarget.blur()}>
            Movies
          </Link>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
