const userModule = require('../module/userModule');
require('dotenv').config();

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET; 
// Define a function called generateToken that takes in an _id parameter
function generateToken(_id){
        // Generate a token by signing the _id with the Secret
    const token = jwt.sign({_id}, SECRET_KEY);
    return token;
}
// Define an asynchronous function called logIn that takes in a request object (req) and a response object (res)
async function logIn(req,res){
        // Destructure the email and password from the request body
    const {email, password} = req.body;
try{
 // Call the logIn function from the userModule passing in the email and password
    const user = await userModule.logIn(email,password);
    // Generate a token using the user's ID
    const token = generateToken(user._id);
    // Send a response with a status code of 200 and a JSON object containing a welcome message, email, and token
    res.status(200).json({mes:'Welcome back', email,token});

}catch(err){
    // If an error occurs, send a response with a status code of 400 and a JSON object containing the error message
    res.status(400).json({mes:err.message});
}
   
}
async function signUp(req,res){
      // Extract the name, email, and password from the request body

const {name, email, password} = req.body;
    try{
            // Call the signUp function from the userModule to create a new user

    const user = await userModule.signUp(name,email,password);
        // Generate a token for the user
    const token = generateToken(user._id);
       // Send a success response with the welcome message, email, and token
    res.status(200).json({mes:'Welcome', email,token});
    }catch(err){
            // Send an error response with the error message

        res.status(400).json({msg:err.message});
    }
   
}
module.exports = {logIn, signUp};
