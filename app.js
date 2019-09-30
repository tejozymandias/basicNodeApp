const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1> My Node App </h1>');
});

app.listen(5000,()=>{
    console.log('App Listening on Port 5000');
});