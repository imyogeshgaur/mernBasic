import React from 'react'
import "./App.css"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import {Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />

      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/about">
        <About/>
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

      <Route exact path="/login">
        <Login/>
      </Route>

      <Route exact path="/signup">
        <SignUp/>
      </Route>
      
    </>
  )
}

export default App
