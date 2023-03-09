import { useState } from 'react'
import { Routes, Route } from 'react-router'

import Login from './Components/Login'
import Home from './Container/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/' element={ <Home/> }/>
     </Routes>
    </div>
  )
}

export default App
