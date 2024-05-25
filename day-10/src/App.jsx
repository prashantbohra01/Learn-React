import { useState } from 'react'
import './App.css'
import FormVal from './FormVal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormVal />
    </>
  )
}

export default App
