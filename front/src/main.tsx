import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import AppRouter from './routes/AppRouter.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
