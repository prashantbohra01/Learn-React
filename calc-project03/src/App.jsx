import add from "./components/Calc"
import {sub, multiply, divide} from "./components/Calc"

function App() {
  return (
    <>
      <ul>
        <li>Sum of two no. is {add(12,4)}</li>
        <li>Subtraction of two no. is {sub(12,4)}</li>
        <li>Multiplation of two no. is {multiply(12,4)}</li>
        <li>dividend of two no. is {divide(40,3)}</li>
      </ul>
    </>
  )
}

export default App
