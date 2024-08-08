import '@/bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { SDKProvider } from '@telegram-apps/sdk-react';

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import './mockEnv.ts';

import '@/assets/styles/main.css';

import * as Providers from '@/providers';

import App from '@/App';

import ErrorBoundary from '@/components/ErrorBoundary';

const ErrorBoundaryError: React.FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ErrorBoundary fallback={ErrorBoundaryError}>
    <SDKProvider acceptCustomStyles>
      <Providers.StoreProvider>
        <Providers.QueryProvider>
          <App />
        </Providers.QueryProvider>
      </Providers.StoreProvider>
    </SDKProvider>
  </ErrorBoundary>,
);
