import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  width: 100%;
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin: 0;
  padding: 0;
  text-align: center;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff3cac, 0 0 82px #ff3cac,
    0 0 92px #ff3cac, 0 0 102px #ff3cac, 0 0 151px #ff3cac;
  animation: flicker 1.5s infinite alternate;

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #ff3cac, 0 0 80px #ff3cac,
        0 0 90px #ff3cac, 0 0 100px #ff3cac, 0 0 150px #ff3cac;
    }

    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
  margin: 30px auto;
  padding: 0;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
