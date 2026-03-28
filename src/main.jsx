import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MyListProvider } from "./Context/MyListContext"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyListProvider>
        <App />
      </MyListProvider>
    </BrowserRouter>
  </StrictMode>,
)
