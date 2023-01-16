import { useEffect, useState } from 'react';

export const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  return (
    <>
      {error && <h1>Something went wrong. Try again later.</h1>}
      {children}
    </>
  );
};
