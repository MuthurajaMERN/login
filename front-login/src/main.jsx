import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <div className="app-container"> 
    <App />
  </div>,
)
