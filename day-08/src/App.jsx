import { useState } from 'react';
import './App.css'

function App() {
  
  const [fullname, setFullName] = useState({
    fname: '',
    lname: '',
  });
 
  const inputEvent = (e) => {     
      const value = e.target.value;
      const name = e.target.name;

      setFullName((prev)=>{
        if(name=== 'fName'){
         return{
          fname: value,
          lname: prev.lname,
        }
        }else if(name=== 'lName'){
          return{
           fname: prev.fname,
           lname: value,
         };
   }
   });
  
  }
  const onSubmits = (event) => {
    event.preventDefault();
    alert('form submitted');
  }
  
  return (
    <>
    <form onSubmit={onSubmits}>
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <input type='text'
       placeholder='Enter Your First Name'
       name='fname'
       onChange={inputEvent}
       value={fullname.fname}/>
      <input type='text'  
       placeholder='Enter your Last Name'
       name='lname'
       onChange={inputEvent} 
       value={fullname.lname}/>
      <button>Submit</button>
      </form>
    </>
  )
}

export default App
