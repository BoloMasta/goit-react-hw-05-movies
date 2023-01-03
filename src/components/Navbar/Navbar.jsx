import css from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={css.Navbar}>
      <div className={css.Navbar__logo}>
        <a href="/" className={css.Navbar__link}>
          📽️
        </a>
      </div>
      <div className={css.Navbar__links}>
        <a href="/" className={css.Navbar__link}>
          Home
        </a>
        <a href="/movies" className={css.Navbar__link}>
          Movies
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
