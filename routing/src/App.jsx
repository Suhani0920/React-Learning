import {BrowserRouter , Routes ,Route , Link,useNavigate, Outlet}  from "react-router-dom";


function App() {
 

  return (
    <div>
                                      
      <BrowserRouter>

       
      <Routes>
       <Route path="/" element={<Layout />} >
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


function Layout(){
  return <div>
    <Header />
    <Outlet></Outlet>
   <Footer />
  </div>
}


function Header(){
  return <div>
    <Link  to="/">Allen</Link>  
      <Link  to="/neet/online-coaching-class-11">Class11</Link>  
      <Link  to="/neet/online-coaching-class-12">Class12</Link>
  </div>
}

function Footer(){
  return <div>
    Contact Us || Know About Us
  </div>
}
function Class11Program(){
  return <div>
    NEET programs for class 11th
  </div>
}
function Class12Program(){
  const navigate =useNavigate();

  function redirectUser(){
         navigate("/")
  }
  return <div>
    NEET programs for class 12th
    <button onClick={redirectUser}>go back to landing page</button>
  </div>
}

function LandingPage(){
  return <div>
    Welcome Buddy
  </div>
}
function ErrorPage(){
  return <div>
    No Page Found
  </div>
}

export default App

