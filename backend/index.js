const express = require('express');
// import express from "express";
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Successful connection of backend</h1>')
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})