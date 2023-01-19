import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import { HashRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyles } from 'Styled/GlobalStyles';

const fetcher = (...args) => fetch(...args).then(response => response.json());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyles />
        <App />
      </SWRConfig>
    </HashRouter>
  </React.StrictMode>
);
