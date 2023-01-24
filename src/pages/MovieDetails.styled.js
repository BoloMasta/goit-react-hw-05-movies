import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from 'images/background.jpg';
import propTypes from 'prop-types';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;

  &::before {
    content: '';
    display: block;
    background-color: rgb(255 255 255);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-image: ${props =>
      props.backdrop
        ? `url('https://image.tmdb.org/t/p/w500/${props.backdrop}')`
        : `url(${background})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px);
    z-index: -1;
    opacity: 0.35;
  }

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const BackButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
`;

export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    max-height: 450px;
    align-self: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Score = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 10px 0;
  display: flex;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Header = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TextData = styled.span`
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ProuctionCompanies = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 10px;
`;

export const ExtraButtonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin: 10px 0;
`;

export const ExtraButton = styled(Link)`
  text-decoration: none;
`;

Wrapper.propTypes = {
  backdrop: propTypes.string,
};

Poster.propTypes = {
  height: propTypes.number,
};
