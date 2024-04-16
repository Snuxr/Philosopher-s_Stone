import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NavigationProvider } from './Context/navigation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>,
)
