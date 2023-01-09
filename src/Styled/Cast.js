import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        rgb(255, 255, 255) 0%,
        darkblue 5%,
        rgb(255, 255, 255) 30%
      )
      border-box;
  border-bottom: 1px solid transparent;
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

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: linear-gradient(
      225deg,
      #2b86c5 0%,
      #784ba0 50%,
      #ff3cac 100%
    );
  }
`;
