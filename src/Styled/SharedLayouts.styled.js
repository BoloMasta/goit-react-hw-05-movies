import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  height: 5rem;
  width: 100vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  background-position: center;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  height: 5rem;
  overflow: visible;
  background-color: transparent;

  &:before {
    content: '';
    background-image: linear-gradient(
      225deg,
      rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-size: 2rem;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover {
    color: #ff3cac;
    text-shadow: 3px 3px 20px #ff3cac, -2px 1px 30px #ff3cac;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #ff3cac;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;
