import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
// import './index.css';
import { GlobalStyles } from 'Styled/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/index.html">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
