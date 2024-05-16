import { useState } from 'react';
import './App.css'

function App() {
  
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [fullName, setFullName] = useState();

  const inputEvent = (e) => {
      setFName(e.target.value)
  }
  const inputEvents = (e) => {
      setLName(e.target.value)
  }


  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(fname + " " + lname);
  }

  return (
    <>
    <form onSubmit={onSubmits}>
      <h1>Hello {fullName}</h1>
      <input type='text' placeholder='Enter Your First Name' onChange={inputEvent} value={fname}/>
      <input type='text' placeholder='Enter your Last Name' onChange={inputEvents} value={lname}/>
      <button>Submit</button>
      </form>
    </>
  )
}

export default App
