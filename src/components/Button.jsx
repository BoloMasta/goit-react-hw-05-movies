import { Wrapper, Icon } from '../Styled/Button';

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
