import { useCallback, useState } from 'react'
import './App.css'
import Todos from './Todos';

// The useCallback and useMemo Hooks are similar. 
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
// One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  }, [todos])

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, "New Todo"]);
  // };
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div> Count: {count}
      <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App
