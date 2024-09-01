// src/components/ErrorFallback.tsx
import React from 'react';

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div>
      <h1>Что-то пошло не так.</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorFallback;
