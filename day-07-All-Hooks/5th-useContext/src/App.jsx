import { createContext } from 'react'
import './App.css'
import B from "./B"

// Context API 
// It is designed to share state across the entire React component tree. 
// Using context API you can share a state to the entire "App" component tree without having to pass it as props at each level.

const GreetContext = createContext();
const Greet2Context = createContext();

export default function App() {
  const greet = "Hello"
  const greet2 = "Hello2"

  return (
    <>
    <GreetContext.Provider value={{greet, greet2}}>
      <B />
    </GreetContext.Provider>
    </>
  )
}

export {GreetContext};

