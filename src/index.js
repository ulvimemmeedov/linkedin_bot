const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const app = express();
const RunSelenium = require('./selenium/selenium');
const port = 4000;

app.get('/api/stop',(req,res)=>{
    res.json({
        success:true,
        message:"bot is stopping"
    });
    process.exit(0)
})

app.get('/api/run',(req,res)=>{
    RunSelenium();
    res.json({
        success:true,
        message:"bot is running"
    });
})

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.listen(port,()=>{
    console.log(`app running http://localhost:${port}/`);
})