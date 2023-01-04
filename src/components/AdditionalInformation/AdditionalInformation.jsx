import css from './AdditionalInformation.module.scss';

import Button from 'components/Button/Button';

const AdditionalInformation = ({ id }) => {
  return (
    <div className={css.AdditionalInformation}>
      <h2 className={css.AdditionalInformation__title}>
        Additional information
      </h2>

      <ul className={css.AdditionalInformation__list}>
        <li>
          <Button label="Cast" icon="cast" />
        </li>
        <li>
          <Button label="Reviews" icon="review" />
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;
