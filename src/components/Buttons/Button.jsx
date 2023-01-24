import { Wrapper, Icon } from './Button.styled';
import propTypes from 'prop-types';
import cast from '../../images/cast.png';
import review from '../../images/review.png';
import left_arrow from '../../images/left_arrow.png';
import right_arrow from '../../images/right_arrow.png';
import filmTape from '../../images/film-tape.png';

const icons = {
  cast,
  review,
  left_arrow,
  right_arrow,
  filmTape,
};

export const Button = ({ label, icon, reverse, onClick, disabled }) => {
  return (
    <Wrapper onClick={onClick} disabled={disabled}>
      {reverse && label}
      <Icon src={icons[icon]} alt={label} reverse={reverse} />
      {!reverse && label}
    </Wrapper>
  );
};

Button.propTypes = {
  label: propTypes.string,
  icon: propTypes.string,
  reverse: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};
