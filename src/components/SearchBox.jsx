import { DebounceInput } from 'react-debounce-input';
import { Wrapper, Header, Icon } from '../Styled/SearchBox';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Header>Search movies</Header>
      <DebounceInput
        debounceTimeout={500}
        value={value}
        onChange={onChange}
        placeholder="type here"
      />
      <Icon />
    </Wrapper>
  );
};
