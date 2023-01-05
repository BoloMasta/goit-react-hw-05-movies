import css from './Container.module.scss';

const Container = ({ children }) => (
  <div className={css.Container}>{children}</div>
);

export default Container;
