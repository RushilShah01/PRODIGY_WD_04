import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Projects from './Components/Projects'  
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Landing from './Components/Landing'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>

      <Landing />
      <Home/>
      <hr/>
      <About/>
      <hr/>
      {/* <Routes>
      <Projects/>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/About" element={<About />} />
      </Routes> */}
      <Projects/>
      <hr/>
      <Contact/>
      <hr/>
      <Footer/>
    </>
  )
}

export default App