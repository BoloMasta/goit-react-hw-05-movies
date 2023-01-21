import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles.styled';

const fetcher = (...args) => fetch(...args).then(response => response.json());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyles />
        <App />
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>
);
