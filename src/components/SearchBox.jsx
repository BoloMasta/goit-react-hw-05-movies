import { Wrapper, Input, Button, Icon } from '../Styled/SearchBox.styled';

export const SearchBox = ({ value, onChange, handleSubmit }) => {
  return (
    <Wrapper>
      <Input type="text" value={value} onChange={onChange} />
      <Button type="submit" onClick={handleSubmit}>
        <Icon />
      </Button>
    </Wrapper>
  );
};
