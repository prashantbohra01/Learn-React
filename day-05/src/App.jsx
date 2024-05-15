import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)


  const IncNum = () => {
    setCount(count+1)
  }

  return (
    <>
    <div className="main">
     <h1> {count} </h1>
     <button onClick={IncNum}>Click Me</button>
     </div>
    </>
  )
}

export default App
