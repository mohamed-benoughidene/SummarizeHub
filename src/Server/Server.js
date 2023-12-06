const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT;
const DB_Key = process.env.DB_KEY;
const userRoutes = require('./Routes/UserRoutes');
const articlesRoutes = require('./Routes/ArticlesRoutes');
app.listen(port);
mongoose.connect(DB_Key).then(()=>{
       console.log("server running"); 
app.use('/api', userRoutes);
app.use('/api', articlesRoutes);
    }).catch(err=>{ console.log(err.message);});