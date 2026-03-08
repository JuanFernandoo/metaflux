import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouterProvider, QueryProvider } from './app'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <AppRouterProvider/>
    </QueryProvider>
  </React.StrictMode>,
)
