import { useState,useEffect, useRef } from 'react'
import './App.css'


// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.

function App() {
  const [inputVal, setInputVal] = useState(0)

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  )
}

export default App
