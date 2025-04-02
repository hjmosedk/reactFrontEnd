import React, { createContext, useContext, useState } from 'react';

interface ErrorContextType {
  error: string | null;
  setError: (message: string | null) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

export const ErrorProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
      {error && (
        <div
          style={{
            position: 'fixed',
            bottom: '1rem',
            left: '1rem',
            color: 'red',
          }}
        >
          {error}
        </div>
      )}
    </ErrorContext.Provider>
  );
};
