import React, { useContext } from 'react'
import App from './App'
import {GreetContext} from './App'


export default function C() {
    
    const useCon = useContext(GreetContext)
    
  return (
   <>
   <h1>Greet: {useCon.greet} {useCon.greet2}</h1>
   </>
  )
}
