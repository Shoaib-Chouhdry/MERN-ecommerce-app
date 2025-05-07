import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './components/shoppingView/CardContext'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <CartProvider>
      <ToastContainer position="top-right" autoClose={3000} />
        <App />
      </CartProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
