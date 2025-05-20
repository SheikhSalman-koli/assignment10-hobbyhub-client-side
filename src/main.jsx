import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Route/Router.jsx'
import AuthProviver from './Componants/Context/AuthProviver.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviver>
      <RouterProvider router={router}></RouterProvider>
       <ToastContainer />
    </AuthProviver>
  </StrictMode>,
)
