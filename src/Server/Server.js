const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT;
const DB_Key = process.env.DB_KEY;
const userRoutes = require('./Routes/UserRoutes');
const SummarizerRoutes = require('./Routes/SummarizerRoutes');
app.use(cors());
app.listen(port);
mongoose.connect(DB_Key).then(()=>{
       console.log("server running");   
app.use('/api', userRoutes);
app.use('/api', SummarizerRoutes);
    }).catch(err=>{ console.log("error:" + err.message)});