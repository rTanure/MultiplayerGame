import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/reset.css'

import RoutedPage from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutedPage />
  </React.StrictMode>
)
