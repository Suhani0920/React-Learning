import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count , setCount]=useState(0);
  const [count2,setCount2]=useState(0);

  function increase(){
    setCount(count=>count+1);
  }
  function decrease(){
    setCount2(count2=>count2-1);
  }
return (
    <div>
      <Counter count={count} count2={count2}/>
      <button onClick={increase}>Increase Count</button> 
      <button onClick={decrease}>Decrease Count</button> 
    </div>
  );
}

function Counter(props) {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount"); // Cleanup will never be triggered if Counter is always rendered
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount



  useEffect(()=>{
    console.log("heyy from button press");


    return () => {
      console.log("clean-up is done for the current value as value changes"); // Cleanup will never be triggered if Counter is always rendered
    };
  },[props.count])

  return <div>
    Counter1 {props.count} <br />
    Counter2 {props.count2} <br />
  </div>;
}

export default App;
