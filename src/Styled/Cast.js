import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        rgb(255, 255, 255) 0%,
        darkblue 5%,
        rgb(255, 255, 255) 30%
      )
      border-box;
  border-bottom: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 500px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;
