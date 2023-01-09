import css from './Navbar.module.scss';
import { StyledNavLink, StyledLogoNavLink } from 'Styled/App.styled';

import Container from 'components/Container/Container';

const Navbar = () => {
  return (
    <>
      <nav className={css.Navbar}>
        <Container extraClass={css.ContainerNavbar}>
          <div className={css.Navbar__logo}>
            <StyledLogoNavLink to="/">📽️</StyledLogoNavLink>
          </div>
          <div className={css.Navbar__links}>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
