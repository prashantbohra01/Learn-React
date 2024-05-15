import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'


// The useEffect Hook allows you to perform side effects in your components.
// Some Examples of side effect are : fetching data, directly updating the DOM, and timers.
// useEffect accept two arguements. The second arguement is optional. useEffect(<function>,<dependency>)

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() =>{
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return() => clearTimeout(App)
  },[]);

  return (
    <>
      <h1>I've rendered {count} times!</h1>
    </>
  )
}

export default App
