import { Wrapper, Icon } from '../Styled/Button';
import propTypes from 'prop-types';

export const Button = ({ label, icon, reverse, onClick, disabled }) => (
  <Wrapper onClick={onClick} disabled={disabled}>
    {reverse && label}
    <Icon
      src={require(`../images/${icon}.png`)}
      alt={label}
      reverse={reverse}
    />
    {!reverse && label}
  </Wrapper>
);

Button.propTypes = {
  label: propTypes.string,
  icon: propTypes.string,
  reverse: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};
