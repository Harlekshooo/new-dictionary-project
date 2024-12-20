import { useState } from 'react'
import './App.css'
import Homescreen from './components/Homescreen/homescreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homescreen />
    </>
  )
}

export default App
