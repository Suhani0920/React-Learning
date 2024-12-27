import { useRef,useState } from 'react'

import './App.css'
//useRef is used to get reference of DOM or value 
/*here the problem statement is that we want a form where we have two inputs box and a submit button when a user click on submit button without 
filling the input  then we want that our cursor will automatically goes to first input*/

//reference to a value , such that when u change the value, the component does not re-renders
//we can do it using raw js but in react we can do this usinf useRef hook
function App() {
   const inputRef=useRef();
  
  function onPressFocus(){
   // document.getElementById("name").focus();

    inputRef.current.focus(); // document.getElementById("name").focus(); both are same
  }
  return (
    <>
      <div>

        <h1>Sign In</h1>
         <input  ref={inputRef} /*id="name"*/></input>
         <input></input>
         <button onClick={onPressFocus}>Submit</button>
      </div>
      
    </>
  )
}

export default App
