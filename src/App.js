import React,{useContext, useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Summarizer from "./components/Summarizer";
import { userContext } from "./context/userContext";
function App() {
  const {state, dispatch} = useContext(userContext);
 
  
 
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path="/" element={state ? <Navigate to="/summarizer" /> : <Home />} />
    <Route  path="/login"element={state ? <Navigate to="/summarizer" /> : <LogIn />}/>
    <Route  path="/signup" element={state ? <Navigate to="/summarizer" /> : <SignUp />} />
   <Route path="/summarizer" element={state ? <Summarizer /> : <Navigate to="/login" />} />
          </Routes>
    </div>
   

    </Router>
  );
}

export default App;
