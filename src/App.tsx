import { useState } from 'react'
import './App.scss'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>App Layout</h1>
      <Outlet/>
    </div>
  )
}

export default App
