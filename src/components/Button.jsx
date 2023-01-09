import { Wrapper, Icon } from '../Styled/Button';

export const Button = ({ label, icon }) => (
  <Wrapper>
    <Icon src={require(`../images/${icon}.png`)} alt={label} />
    {label}
  </Wrapper>
);
