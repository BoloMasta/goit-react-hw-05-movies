import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 500px;
  overflow-y: scroll;
  transition: all 0.2s ease-in-out;
  padding: 10px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 60, 172, 0.5) 15%,
      rgba(120, 75, 160, 0.5) 35%,
      rgba(43, 134, 197, 0.5) 45%,
      rgba(255, 255, 255, 0.5) 90%
    );
  }
`;

export const Author = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: left;
  width: 100%;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Content = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
