import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lru from './components/Lru-page'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Lru/>
  </StrictMode>,
)
