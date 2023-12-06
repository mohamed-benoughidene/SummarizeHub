import React,{useState, useContext} from 'react';
import axios from 'axios';
import { userContext } from '../context/userContext';
import Nav from './Nav'
import Loader from './Loader';
export default function SignUp() {
  const {state, dispatch} = useContext(userContext);
// getting the values of the form
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [pass, setPass]= useState("");
// states
const [loading, setLoading] = useState(false);
const [err, setErr] = useState(false);
const signUp = async () => {
  // Create an object with name, email, and password
  const data = { name, email, password: pass };
  
  // Set loading to true to indicate that the sign up process has started
  setLoading(true);
  
  try {
    // Send a POST request to the "/api/signup" endpoint with the data object
    const response = await axios.post("/api/signup", { ...data });
    // Dispatch a "LOGIN" action with the response data
    dispatch({ type: "LOGIN", payload: response.data });
    // Extract the token and user email from the response data
    const token = response.data.token;
    const userEmail = response.data.email;
    // Dispatch a "LOGIN" action with the token
    dispatch({ type: "LOGIN", payload: token });
    // Store the token and user email in the local storage
    localStorage.setItem("token", token);
    localStorage.setItem("userEmail", userEmail);
    // Set loading to false to indicate that the sign up process has completed
    setLoading(false);
    // Reset the error flag
    setErr(false);
  } catch (err) {
    // Set the error message based on the response data
    setErr(err.response.data.msg);
    setLoading(false);
  }
}
function handleSubmit(e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  // Call the signUp() function to handle the form submission
  signUp();
  // Reset the name, email, and input field to an empty string
  setEmail("");
  setName("");
  setPass("");
}
  return (
    <>
    {loading ? <Loader/> : <>
    <Nav currentPage={"signup"}/>
    <div className="container">
        <div className="signUp">
            <h1> <span className='highlight1'>Sign</span><span className='highlight2'>Up</span></h1>
            <p>Join SummarizeHub and Transform Your Writing Journey Today!</p>
            <form action="" onSubmit={(e)=> handleSubmit(e)}>
                <input type="text"  name='name' placeholder='your name' value={name} onChange={e=> setName(e.target.value)}/>
                <input type="email" name='email' placeholder='your email' value={email} onChange={e=> setEmail(e.target.value)}/>
                <input type="password" name='password' placeholder='****' value={pass} onChange={e=>setPass(e.target.value)}/>
                {err && <p className='err'>{err}</p>}
                <button className='btn' type='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    </div>
    </>}
   
    </>
  )
}
