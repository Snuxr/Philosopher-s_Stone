import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NavigationProvider } from './Context/navigation'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </Provider>
  </React.StrictMode>
)
