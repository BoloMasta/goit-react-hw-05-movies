import { Link } from 'react-router-dom';
import styled from 'styled-components';
import filmTape from 'images/film-tape.png';
import defaultPoster from 'images/default_poster.jpg';
import propTypes from 'prop-types';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Item = styled.li`
  padding: 5px 12px;
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

  @media screen and (min-width: 768px) {
    &:hover::after,
    &:focus::after {
      content: '';
      background-image: ${props =>
        props.cover
          ? `url('https://image.tmdb.org/t/p/w500/${props.cover}')`
          : `url(${defaultPoster})`};

      background-size: cover;
      width: 160px;
      height: 240px;
      display: block;
      border-radius: 4px;
      border: 1px solid rgba(43, 134, 197);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      position: absolute;
      top: -140px;
      left: 400px;
      z-index: 1;
    }
  }
`;

Item.propTypes = {
  filmTape: propTypes.string,
};

LinkToDetails.propTypes = {
  cover: propTypes.string,
  defaultPoster: propTypes.string,
};
