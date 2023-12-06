const jwt = require('jsonwebtoken');
const userModule = require('../module/userModule')
require("dotenv").config();

async function requireAuth(req,res,next){
 const { authorization } = req.headers;
<<<<<<< HEAD
 const Secret = process.env.SECRET_KEY; 
=======
 const Secret = "gy3P6kCN9@!fT2$Z";
>>>>>>> aef90de763960a1564a9376bed999c0b545d4d2e
if(!authorization){
    res.status(401).send({error:"you must be logged in"});
}
const token = authorization.split(" ")[1]

try{
const {_id} = jwt.verify(token, Secret)
 req.user = await userModule.findOne({_id});
 next()
}catch(err){
res.status(400).send({err});
}
}
module.exports = requireAuth;
