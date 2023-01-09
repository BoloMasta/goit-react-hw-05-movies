import { Wrapper, Header, Input, Button, Icon } from '../Styled/SearchBox';

export const SearchBox = ({ value, onChange, handleSubmit }) => {
  return (
    <Wrapper>
      <Header>Search movies</Header>
      <Input type="text" value={value} onChange={onChange} />
      <Button type="submit" onClick={handleSubmit}>
        <Icon />
      </Button>
    </Wrapper>
  );
};
