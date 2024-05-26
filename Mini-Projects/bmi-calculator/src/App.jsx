import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState(120)
  const [weight, setWeight] = useState(50)


  function weightInc(e){
    setWeight(e.target.value)
  }
  function heightInc(e){
    setHeight(e.target.value)
  }

  const output = useMemo(() => {
    const calculateHeight = height/100;
    return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height])

  return (
    <>
      <div className="container">
        <div className="head">
          <h1>BMI Calculator</h1>
        </div>
        <div className="input">
          <label>Weight:{weight}kg</label>
          <input type='range' max='180' min="20" onChange={weightInc}></input>
          <label>Height: {height}cm</label>
          <input type='range' max='250' min="100" onChange={heightInc}></input>
        </div>
        <h2>Your BMI is</h2>
        <p>{output}</p>
      </div>
    </>
  )
}

export default App
