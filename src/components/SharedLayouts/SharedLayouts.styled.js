import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoImage from 'images/logo-camera.png';
import background from 'images/background.jpg';
import propTypes from 'prop-types';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;

  &:before {
    content: '';
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.3;
    filter: blur(5px);
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 12px;
  height: 5rem;
  overflow: visible;
  background-color: transparent;
  z-index: 1;

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
    z-index: 0;
  }

  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${logoImage});
  background-size: cover;
  z-index: 1;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover,
  &:focus {
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

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

Container.propTypes = {
  background: propTypes.string,
};

Logo.propTypes = {
  logoImage: propTypes.string,
};

Link.propTypes = {
  to: propTypes.string,
  onclick: propTypes.func,
};
