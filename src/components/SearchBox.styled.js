import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  width: 250px;
  border-radius: 10px;
  border-image: linear-gradient(
    225deg,
    rgba(255, 60, 172) 0%,
    rgba(120, 75, 160) 50%,
    rgba(43, 134, 197) 100%
  );
  border-image-slice: 1;
  border-width: 2px;
  border-style: solid;
  font: inherit;

  &:focus {
    outline: none;
    border-radius: 10px;
  }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
