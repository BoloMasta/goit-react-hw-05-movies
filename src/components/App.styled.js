import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  position: relative;

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

export const StyledLogoNavLink = styled(NavLink)`
  text-decoration: none;

  &:hover {
    text-shadow: 3px 3px 20px #ff3cac, -2px 1px 30px #ff3cac;
  }

  &.active {
    text-decoration: none;
  }
`;
