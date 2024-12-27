import { useState ,useRef} from 'react'
import './App.css'
// a clock with a start and stop button

function App() {
  const [currentCount , setCount]=useState(0);



  /*let time=0;// this will not work coz every time our component get re-renders its get re-itialized with 0
 function startCount(){
     time= setInterval(()=>{
      setCount(currentCount=>currentCount+1);
     },1000)

    //this time variable we cant get inside our stopCount function so we need to declare it elsewhere
 }
 function stopCount(){
    
   console.log(time);
    clearInterval(time);
 }

 */







 //using stateVariable now:
/*const [timer,setTimer]=useState(0);

function startCount(){
  let time= setInterval(()=>{
   setCount(currentCount=>currentCount+1);
  },1000)

  setTimer(time);//here its make the react to re-render coz timer value gets updated that we dont want coz we just want to know a value not ot use it  
                  we want to just store it and later use it

 
    }
function stopCount(){
 

 clearInterval(timer);
}

*/
 








//using useRef:-

const timer=useRef();
function startCount(){
  let time= setInterval(()=>{
   setCount(currentCount=>currentCount+1);
  },1000)

  timer.current = time;//not trigger re-render
}
function stopCount(){
 
 
 clearInterval(timer.current);
}
return (
    <>
      {currentCount}
      <div style={{margin:20}}>
        <button onClick={startCount} style={{margin:20}}>Start</button>
        <button onClick={stopCount}>Stop</button>
            
      </div>
      
    </>
  )
}

export default App
