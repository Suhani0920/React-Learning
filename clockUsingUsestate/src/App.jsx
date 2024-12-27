import { useState ,useEffect} from 'react'

import './App.css'

function App() {
 

  return <div>
    <Counter></Counter>
  </div>
    
        
  
}


//here we want that after every 1 sec count value increases

function Counter(){
 const [count,setCount]=useState(0);

 //using setInterval will change the value but after sometime numbers will not show properly
 /*setInterval(()=>{
  setCount(count+1);
 },1000)*/

 //using useEffect to guard setInterval from re-renders

 useEffect(function(){
  setInterval(()=>{
  setCount((count)=>count+1);
 },1000)

 console.log("mounted");
 },[]);

  return <div>
    <h1>{count}</h1>
  </div>
}

export default App
