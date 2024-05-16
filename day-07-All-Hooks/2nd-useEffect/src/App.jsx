import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'


// The useEffect Hook allows you to perform side effects in your components.
// Some Examples of side effect are : fetching data, directly updating the DOM, and timers.
// useEffect accept two arguements. The second arguement is optional. useEffect(<function>,<dependency>)

function App() {

  const [count, setCount] = useState(0)

   useEffect(()=> {
    // console.log("Hello useEffect");
    document.title = `Chats (${count})`
   },)                                      //  useEffect will run after the priortised code it will run as a side effect.
   console.log("Hello from outside");       // Thats why this will print first then after that useEffect will be called.

  return (
    <>
      <h1>{count}</h1>
      <button className='btn' onClick={()=> setCount(count+1)}>Click😃</button>
    </>
  )
}

export default App
