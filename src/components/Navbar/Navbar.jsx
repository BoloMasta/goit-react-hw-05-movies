import css from './Navbar.module.scss';
import { StyledNavLink, StyledLogoNavLink } from 'components/App.styled';

const Navbar = () => {
  return (
    <>
      <nav className={css.Navbar}>
        <div className={css.Navbar__logo}>
          <StyledLogoNavLink to="/">📽️</StyledLogoNavLink>
        </div>
        <div className={css.Navbar__links}>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
