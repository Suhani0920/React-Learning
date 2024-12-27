import { useState , useEffect} from 'react'


//conditional rendering
function App() {
  let [counterVisible,setCounterVisible]=useState(true);
  useEffect(()=>{
   let interval = setInterval(()=>{
      setCounterVisible(c=>!c);
    },5000);
    return () => clearInterval(interval); // Cleanup interval
  
  },[])

  return (
   <div>
    {counterVisible && <Counter></Counter>}
   </div>
  )
}

function Counter(){
  const [count,setCount]=useState(0);
 
  
 /*as our component get mounted our clock starts and when the component unmounted our clock still working we need to manually stop
  it so we use clearInterval to stop it this is called clean-up*/
  useEffect(function(){
    console.log("on-mount");
   let clock=setInterval(()=>{
   console.log("inside set Interval");
    setCount(c=>c+1);
  },1000);

  return function(){
    console.log("unmount");
    clearInterval(clock);
  }
 
  
  },[]);
 
   return <div>
     <h1>{count}</h1>
   </div>
 }

export default App
