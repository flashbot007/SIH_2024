import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'
import { I18nextProvider } from 'react-i18next'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider>
    <App />
    </I18nextProvider>
  </StrictMode>,
)
