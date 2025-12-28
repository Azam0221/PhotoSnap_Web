import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VerificationPage from './VerificationPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <VerificationPage />
  </StrictMode>,
)
 