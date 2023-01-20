import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 16px;
  flex-wrap: wrap;

  input {
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
    outline: none;
    opacity: 0.7;
    transition: opacity 250ms ease-in-out;

    &:hover {
      opacity: 1;
    }

    &:focus {
      opacity: 1;
      background-image: linear-gradient(
        90deg,
        rgba(43, 134, 197, 0.15) 0%,
        rgba(120, 75, 160, 0.15) 50%,
        rgba(255, 60, 172, 0.15) 100%
      );
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 0.5rem;

    input {
      width: 100%;
      font-size: 0.8rem;
    }
  }
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
`;

export const Icon = styled(HiSearch)`
  width: 25px;
  height: 25px;
  position: relative;
  right: 56px;
  z-index: 1;
  opacity: 0.7;

  @media (max-width: 768px) {
    top: -40px;
    left: calc(50% - 20px);
  }
`;
