import { useState } from 'react'
import './App.css'

function App() {
  let time = new Date().toLocaleTimeString();
  
  const [count, setCount] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCount(time);
  }

setInterval(UpdateTime, 1000);
  return (
    <>
     <h1> {count} </h1>
    </>
  )
}

export default App
