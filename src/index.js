import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles.styled';

const fetcher = async (...args) => {
  const res = await fetch(...args);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

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
