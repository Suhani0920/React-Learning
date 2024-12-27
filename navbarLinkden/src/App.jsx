import { useState , useEffect } from 'react'

import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState("feed");


    useEffect(()=>{
      console.log("backend request has been sent for the "+currentTab + "  tab");
    },[currentTab])
  return <div>
     <button onClick={()=>{setCurrentTab("feed")}} style={{color: currentTab == "feed" ? "pink" : "black"}}>Feed</button>
     <button onClick={()=>{setCurrentTab("notification")}} style={{color: currentTab == "notification" ? "aqua" : "black"}}>Notification</button>
     <button onClick={()=>{setCurrentTab("message")}} style={{color: currentTab == "message" ? "aqua" : "black"}}>Message</button>
     <button  onClick={()=>{setCurrentTab("jobs")}} style={{color: currentTab == "jobs" ? "aqua" : "black"}}>Jobs</button>
  </div>
    
}

export default App
