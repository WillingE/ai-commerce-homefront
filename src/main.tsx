import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import AnimationProvider from './components/AnimationProvider';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </HelmetProvider>
);
