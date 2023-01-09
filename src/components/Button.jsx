import { Wrapper, Icon } from '../Styled/Button';

const Button = ({ label, icon }) => (
  <Wrapper>
    <Icon src={require(`../images/${icon}.png`)} alt={label} />
    {label}
  </Wrapper>
);

export default Button;
