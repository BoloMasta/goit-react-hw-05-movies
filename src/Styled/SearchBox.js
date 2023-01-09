import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  display: block;
  flex-basis: 100%;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  width: 250px;
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
  opacity: 0.7;

  &:focus {
    outline: none;
    opacity: 1;
    background-image: linear-gradient(
      90deg,
      rgba(43, 134, 197, 0.15) 0%,
      rgba(120, 75, 160, 0.15) 50%,
      rgba(255, 60, 172, 0.15) 100%
    );
  }
`;

export const Button = styled.button`
  border: none;
  width: 41px;
  height: 41px;
  cursor: pointer;
  background-image: linear-gradient(
    270deg,
    rgba(43, 134, 197) 0%,
    rgba(120, 75, 160) 50%,
    rgba(255, 60, 172) 100%
  );
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled(HiSearch)`
  width: 25px;
  height: 25px;
  filter: invert(1);
`;
