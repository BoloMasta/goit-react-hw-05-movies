import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
`;

export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(100% - 30px);
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  max-height: 500px;
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
`;
export const Score = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 10px 0;
  display: flex;
`;
export const Votes = styled.span`
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const Header = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Overview = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const Genres = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 400;
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
