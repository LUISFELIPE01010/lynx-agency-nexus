import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupMobileVideoCompatibility } from './utils/videoUtils'

// Performance optimization: Ensure root element is ready
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
  
  // Initialize mobile video compatibility after app renders
  setTimeout(() => {
    setupMobileVideoCompatibility();
  }, 100);
}
