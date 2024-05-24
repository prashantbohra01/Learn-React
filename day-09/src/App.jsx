import { useState } from 'react'
import './App.css'
import RouterExample from './RouterExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterExample />
    </>
  )
}

export default App
