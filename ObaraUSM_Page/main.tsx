// main.tsx
import { ViteSSG } from 'vite-ssg';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

// Opakowujemy App w HelmetProvider, żeby meta tagi działały w SSG
export const createApp = ViteSSG(
  (props) => (
    <HelmetProvider>
      <App {...props} />
    </HelmetProvider>
  )
);
