import { useState } from 'react'
import './App.css'


// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.

function App() {
  const [count, setCount] = useState(0)

  function Increment(){
    setCount(prevState => prevState + 1)
    setCount(prevState => prevState + 1)
  }
  function Decrement(){
    setCount(count - 1)
  }

// Example 2 using ternary operator.

  const [color, setColor] = useState("Red")
  const textColor = color === "Blue" ? "Blue" : "Red";

// Example 3 in which a single Hook holds an Object.

const[car, setCar] = useState({
  brand: "Ford",
  model: "Mustang",
  year: "1964",
  color: "red"
});

  return (
    <>
    <h1>Example 1: Increment and Decrement</h1>
    <button onClick={Increment}>Add</button>
    <strong>{count}</strong>
    <button onClick={Decrement}>Remove</button>
    <br />
    <hr />
    <h1>Example 2: use of ternary operator</h1>
    <h2 >My favorite color is :<span style={{ color: textColor }}>{color}</span> </h2>
    <button onClick={() => setColor("Blue")}>Blue</button>
    <button onClick={() => setColor("Red")}>Red</button>
    <br />
    <hr />
    <h1>Example 3: create a single hook that holds an Object</h1>
    <h2>My {car.brand}</h2>
    <p>It is a {car.color} {car.model} from {car.year}</p>
    </>
  )
}

export default App
