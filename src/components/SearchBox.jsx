import { DebounceInput } from 'react-debounce-input';
import { Wrapper, Header, Icon } from '../Styled/SearchBox';
import propTypes from 'prop-types';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Header>Search movies:</Header>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="type here"
      />
      <Icon />
    </Wrapper>
  );
};

SearchBox.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
