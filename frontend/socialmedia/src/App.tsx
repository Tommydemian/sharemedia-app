import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Login from './Components/Login'
import Home from './Container/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
    </Routes>      
    </BrowserRouter>  
  )
}

export default App
