import { useState } from 'react'

import './App.css'
import Router from './Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Router />
      <ToastContainer
        position="top-right"
        pauseOnHover
        autoClose={3000}
      />
    </div>

  )
}

export default App;
