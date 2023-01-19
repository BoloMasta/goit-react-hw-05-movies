import { Link } from 'react-router-dom';
import styled from 'styled-components';
import filmTape from 'images/film-tape.png';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: 0.9rem;
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
  position: relative;

  &::before {
    content: '';
    background-image: url(${filmTape});
    background-size: cover;
    position: absolute;
    width: 25px;
    height: 25px;
    left: -25px;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const LinkToDetails = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 1px;

  &:hover,
  &:focus {
    color: #ff3cac;
  }

  &:hover::after,
  &:focus::after {
    content: '';
    background-image: url('https://image.tmdb.org/t/p/w500$', {props => props.cover})
     
    width: 150px;
    height: 200px;
    background: #ff3cac;
    display: block;
    border-radius: 2px;
    position: absolute;
    top: -100px;
    left: 350px;
    z-index: 1;
  }
`;
