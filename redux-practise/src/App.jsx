import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incr(){
    setCount(count+1)
  }
  
  function decr(){
    setCount(count-1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incr}>+</button>
      <br />
      <button onClick={decr}>-</button>
    </>
  )
}

export default App
