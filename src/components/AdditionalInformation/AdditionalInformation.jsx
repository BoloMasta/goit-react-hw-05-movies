import css from './AdditionalInformation.module.scss';

const AdditionalInformation = ({ id }) => {
  return (
    <div className={css.AdditionalInformation}>
      <h2 className={css.AdditionalInformation__title}>
        Additional information
      </h2>
      <ul className={css.AdditionalInformation__list}>
        <li className={css.AdditionalInformation__item}>
          <img
            src={require('../../images/theatre.png')}
            className={css.AdditionalInformation__icon}
          />
          Cast
        </li>
        <li className={css.AdditionalInformation__item}>
          <img
            src={require('../../images/review.png')}
            className={css.AdditionalInformation__icon}
          />
          Reviews
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;
