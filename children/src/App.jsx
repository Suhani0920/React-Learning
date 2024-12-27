import { useState } from 'react'

/*this code inside App is difficult to read so we can use children prop in this case .Children prop is used when we want to make a wrapper for our content
 */
/*function App() {
  return <div style={{display:"flex"}}>
    <Card innerContent={"Hii there"} />
    <Card innerContent={<div style={{color:"aquamarine"}}>"Hii there!! What do you want to post today<br></br>"
    <input type={"text"}></input>
    
    </div>} />

  </div>
}

function Card({innerContent}){
  return <div style={{background:"pink" , borderRadius:30 , color:"white",padding:13 , margin:50}}>
    {innerContent}
  </div>
}*/


function App() {
  return <div style={{display:"flex"}}>
    <Card>
       <div>
          Hii there
       </div>
    </Card>
    <Card>
        <div style={{color:"aquamarine"}}>"Hii there!! What do you want to post today<br></br>"
           <input type={"text"}></input>
    
    </div>
    </Card>

  </div>
}

function Card({children}){
  return <div style={{background:"pink" , borderRadius:30 , color:"white",padding:13 , margin:50}}>
    Top bar
    
    {children}

    Footer
  </div>
}

export default App
