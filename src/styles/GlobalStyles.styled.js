import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        background-color: #fff;
        color: #000;
        overflow-y: scroll;    
        overflow: overlay;
    }  

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    };

    ::-webkit-scrollbar
    {
        width: 10px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-image: linear-gradient(
            225deg,
            #2b86c5 0%,
            #784ba0 50%,
            #ff3cac 100%
        );

        &:hover {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        }
    }`;

export const Wrapper = styled.div`
  padding: 0 16px;
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  display: block;
  flex-basis: 100%;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
