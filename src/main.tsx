import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { UIProvider } from '@yamada-ui/react'
import './map.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIProvider>
    <App />
    </UIProvider>
  </StrictMode>,
)
