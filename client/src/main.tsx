import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Performance optimization: Ensure root element is ready
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
