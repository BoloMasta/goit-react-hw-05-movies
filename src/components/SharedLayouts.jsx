import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from './ErrorBoundary';
import { Container, Header, Logo, Link } from '../Styled/SharedLayouts';
import { Loader } from './Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="camera icon">
            📽️
          </span>
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};
