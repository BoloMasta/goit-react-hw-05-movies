import css from './Container.module.scss';

const Container = ({ children, extraClass }) => {
  const classes = [css.Container, extraClass].join(' ');
  return <div className={classes}>{children}</div>;
};

export default Container;
