import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './firebaseConfig';
import '@fontsource/merriweather';
import '@fontsource/playfair-display';
import '@fontsource/noto-serif-kr'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
