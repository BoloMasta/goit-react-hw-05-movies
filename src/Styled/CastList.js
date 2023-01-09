import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255) 0%,
      rgba(255, 60, 172, 0.5) 15%,
      rgba(120, 75, 160, 0.5) 35%,
      rgba(43, 134, 197, 0.5) 45%,
      rgba(255, 255, 255) 90%
    );
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 200px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000;
  margin: 10px 0;
  width: 25%;
  display: flex;
  align-items: center;
`;

export const Character = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin: 10px 0;
  max-width: 50%;
  display: flex;
  align-items: center;
`;
