import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import { ErrorProvider } from './contexts/ErrorContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ErrorProvider>
  </StrictMode>,
);
