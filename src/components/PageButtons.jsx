import { Button } from './Button';

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
        marginTop: 15,
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

      {/* <Button disabled={page === 1} onClick={() => onPrevPage()} type="button">
        Prev
      </Button>
      <Button
        disabled={page === totalPages}
        onClick={() => onNextPage()}
        type="button"
      >
        Next
      </Button> */}
    </div>
  );
};
