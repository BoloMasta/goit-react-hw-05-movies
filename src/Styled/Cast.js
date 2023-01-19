import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  height: 500px;
  overflow-y: scroll;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  overflow: overlay;

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
  flex-direction: row;
  height: 200px;
  gap: 20px;
  width: 100%;
  margin-bottom: 10px;
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
      rgba(255, 255, 255, 0.2) 90%
    );
  }
`;

export const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
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
