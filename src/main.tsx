
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import './index.css';

// Use environment variable or fallback to a placeholder
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_placeholder_key';

// For local development or preview environments, we'll use a placeholder key
// This helps prevent the "Missing Clerk Publishable Key" error during development
if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  console.warn('No Clerk Publishable Key found. Using placeholder for development. Authentication features will not work properly.');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
