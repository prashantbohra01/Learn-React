import { useReducer, useState } from 'react'
import './App.css'
import UseReducerEx from './UseReducerEx';


const reducer = (state, action)=>{
  switch (action.type) {
    case 'incr':
      return{count: state.count + 1};
    case 'decr':
      return{count: state.count - 1};
      default:
        throw new Error()
  }
}
function App() {
  //const [count, setCount] = useState(0)
 const[state,dispatch] = useReducer(reducer,{count:0});
 
 // reducer (coffee maker) function
 // it is pure function 
 // it have state (coffee powder) and action (hot water)
// new state (coffee)

// pure function 
// 10+10=20 and no side effect

  const increMent =()=>{
    dispatch({type:"incr"})
  }
  const decrement =()=>{
    dispatch({type:"decr"})
  }

  return (
    <>
     <h1>{state.count}</h1>
     <button onClick={increMent}>+</button>
     <button onClick={decrement}>-</button>
     <br />
     <hr />
     <UseReducerEx />
    </>
  )
}

export default App
