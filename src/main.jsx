import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/AuthContext.jsx';
import { SpeedInsights } from "@vercel/speed-insights/react";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
        <SpeedInsights />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)