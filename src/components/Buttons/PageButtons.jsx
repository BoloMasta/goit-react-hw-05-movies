import { Button } from './Button';
import propTypes from 'prop-types';

export const PageButtons = ({ page, totalPages, onPrevPage, onNextPage }) => {
  if (totalPages === 1) {
    return null;
  }

  const prevDisabled = page === 1 ? true : false;
  const nextDisabled = page === totalPages ? true : false;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <Button
        disabled={prevDisabled}
        label="Prev page"
        icon="left_arrow"
        onClick={() => onPrevPage()}
      />
      <Button
        disabled={nextDisabled}
        label="Next page"
        icon="right_arrow"
        reverse="true"
        onClick={() => onNextPage()}
      />
    </div>
  );
};

PageButtons.propTypes = {
  page: propTypes.number,
  totalPages: propTypes.number,
  onPrevPage: propTypes.func,
  onNextPage: propTypes.func,
};
