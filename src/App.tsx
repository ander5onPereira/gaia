import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import './config/thema.light.scss'
import './config/global.scss'
import { AppRoutes } from './Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  )
}

export default App
