import css from './Button.module.scss';

const Button = ({ label, icon }) => (
  <button className={css.Button}>
    <img
      src={require(`../../images/${icon}.png`)}
      alt={label}
      className={css.Button__icon}
    />
    {label}
  </button>
);

export default Button;
