import { useState } from 'react'
import './App.css'

function App() {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime)

  const UpdateTime = () => {
   newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }


  return (
    <>
      <div className="main">
      <h1> {ctime} </h1>
      <button onClick={UpdateTime}> Get Time </button>
      </div>
    </>
  )
}

export default App
