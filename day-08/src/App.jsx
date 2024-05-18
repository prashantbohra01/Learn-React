import { useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const inputEvent = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,  // (spread operator) this will store the previous value of formData
      [name]: value,
    })
  }

  const onSubmits = (event) => {
    event.preventDefault();
    alert('form submitted');
  }
  
  return (
    <>
    <form onSubmit={onSubmits}>
      <h1>Hello {formData.name} {formData.email} {formData.password}</h1>
     
      <input type='text'
       placeholder='Enter Your First Name'
       name='name'
       onChange={inputEvent}
       value={formData.name}/>
     
      <input type='email'  
       placeholder='Enter your Email'
       name='email'
       onChange={inputEvent} 
       value={formData.email}/>
     
      <input type='password'  
       placeholder='Enter your Password'
       name='password'
       onChange={inputEvent} 
       value={formData.password}/>
     
      <button>Submit</button>
      </form>
    </>
  )
}

export default App
