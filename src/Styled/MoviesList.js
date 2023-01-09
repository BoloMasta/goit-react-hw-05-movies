import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
`;

export const List = styled.ul`
  list-style: outside '🎞️';
`;

export const Item = styled.li`
  padding: 6px 12px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        rgb(255, 255, 255) 0%,
        darkblue 5%,
        rgb(255, 255, 255) 30%
      )
      border-box;
  border-bottom: 1px solid transparent;
`;

export const LinkToDetails = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 1px;

  &:hover,
  &:focus {
    color: #ff3cac;
  }
`;
