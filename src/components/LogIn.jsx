import React,{useState, useContext} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { userContext } from '../context/userContext';
import Nav from './Nav';
import Loader from './Loader';
export default function LogIn() {
  // getting the values of the form
  const [email, setEmail] = useState("");
const [pass, setPass]= useState("");
//* login status
const {state, dispatch} = useContext(userContext);
// tracking status
const [loading, setLoading] = useState(false);
const [err, setErr] = useState(false);
const logIn = async () => {
    // Create an object with email and password properties
  const data = {email, password: pass};
  
  setLoading(true);
  try{
        // Send a POST request to the "/api/login" endpoint with the data object
    const response = await axios.post("https://summarizehub.onrender.com/api/login", {...data});
        // Extract the token and userEmail from the response data

    const token = response.data.token;
    const userEmail = response.data.email;
        // Dispatch an action to update the state with the token and userEmail
      dispatch({type:"LOGIN", payload:token});
          // Store the token and userEmail in the local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', userEmail);
      setErr(false);
      setLoading(false);
  }catch(err){
    
    setErr( err.response.data.mes);
    setLoading(false);
  }
}
function handleSubmit(e){
  e.preventDefault();
  logIn();
  setEmail("")
  setPass("")
  }
  return (
    <>
    
    <Nav currentPage={"login"}/>
    {loading ? <Loader/> : <div className='container'>
      <div className="login">
    
        <h1><span className='highlight1'>Log</span><span className='highlight2'>In</span></h1>
        <p>
      Refine Your Words, Elevate Your Expression.
        </p>
        <form action="" onSubmit={(e)=> handleSubmit(e)}>
        <input type="email" name='email' placeholder='your email' value={email} onChange={e=> setEmail(e.target.value)}/>
        <input type="password" name='password' placeholder='****' value={pass} onChange={e=>setPass(e.target.value)}/>
        {err && <p className='err'>{err}</p>}
<button type='submit' className='btn'>Log in</button>
<p>don't have an account?  <Link to="/signup" className='highlight'>Sign Up</Link></p>
        </form>
      </div>
      </div>}
      
     
    </>
  )
}
