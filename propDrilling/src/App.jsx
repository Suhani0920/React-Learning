/*Prop drilling occurs when uhh need to pass data from a higher level component down to a lower level component that is several layers deep in the 
component tree */


import { useState } from 'react'

import './App.css'


/*here we can see that we need to pass our state variables through Light component to LightBulb and LightSwitch component and Light component doesn' t use
it, if there are more number of variables that we need to pass down and if anybody want to change the name of variable then they have to change everywhere
where it is used so this is problem with prop drilling . In our app component we are declaring state variable coz we are considering the case where if there is
a component which is direct child of App and it also needs the same variables*/



function App() {
  const [bulbOn, setBulbOn] = useState(true);
  

  return <div>
    <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div> 
      
}

function Light({bulbOn , setBulbOn}){
  return <div>
    <LightBulb  bulbOn={bulbOn}/>
    <LightSwitch  bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function LightBulb({bulbOn}){
  return <div>
    {bulbOn? "Bulb On" : "Bulb Off"}
  </div>
}

function LightSwitch({bulbOn , setBulbOn}){
  function toggle(){
    setBulbOn(current=>!current);
  }

  return <div>
    <button onClick={toggle}>Toggle</button>
  </div>
}
export default App
