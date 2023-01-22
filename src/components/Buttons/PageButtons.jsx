import { Button } from './Button';
import propTypes from 'prop-types';

export const PageButtons = ({ page, totalPages, handlePageChange }) => {
  if (totalPages === 1) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <Button
        disabled={page === 1}
        label="Prev page"
        icon="left_arrow"
        onClick={() => handlePageChange(page - 1)}
      />
      <Button
        disabled={page === totalPages}
        label="Next page"
        icon="right_arrow"
        reverse="true"
        onClick={() => handlePageChange(page + 1)}
      />
    </div>
  );
};

PageButtons.propTypes = {
  page: propTypes.number,
  totalPages: propTypes.number,
  handlePageChange: propTypes.func,
};
