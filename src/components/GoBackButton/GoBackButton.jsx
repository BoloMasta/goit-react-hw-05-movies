import css from './GoBackButton.module.scss';

const GoBackButton = () => {
  return (
    <button className={css.GoBackButton}>
      <img
        src={require('../../images/left_arrow.png')}
        alt="Go back"
        className={css.GoBackButton__icon}
      />
      Go back
    </button>
  );
};

export default GoBackButton;
