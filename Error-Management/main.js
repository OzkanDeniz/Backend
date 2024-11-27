"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

app.get('/user/:id',(req,res)=>{
    res.status(200).send({userId: 1, userName: 'John'})
})



app.use('*',(req,res)=>{
    res.status(404).send('The route is not found')
})

app.listen(PORT, () => console.log("Running: http://127.0.0.1" + PORT));
