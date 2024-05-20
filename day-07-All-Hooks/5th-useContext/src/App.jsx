import { useContext, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const useCon = useContext(GreetContext)

  return (
    <>

     <h1>Greet: {useCon}</h1>
    
    </>
  )
}

export default App
