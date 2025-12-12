import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'
import TranslateContextProvider from './contexts/TranslateContext.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TranslateContextProvider>
        <App />
      </TranslateContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
