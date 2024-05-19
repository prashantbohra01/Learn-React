import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  const [count, setCount] = useState('');
  const [items, setItems] = useState([]);

  const itemEvents = (e) => {
    setCount(e.target.value);
  };

  const addBtn = () => {
    setItems((oldItems) => {
      return [...oldItems, count];
    });
    setCount('');
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="centre-div">
          <br />
          <h1>ToDo List</h1>
          <b />
          <input
            type="text"
            placeholder="Add an Item"
            onChange={itemEvents}
            value={count}
          />
          <button onClick={addBtn}> + </button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;