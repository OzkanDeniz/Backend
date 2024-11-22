"use strict";
/*--------------------------
    EXPRESSJS
--------------------------*
* nmp init - y
* nmp i express dotenv

/*------------------------*/
//Express Started:
const express = require("express");
const app = express();
//Dotenv
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";
/*------------------------*/

//HTTP METHOD(GET,POST,PUT,DELETE) & URLs('/')

app.get('/', (req, res)=>{
console.log('get atıldı')
 
    res.send({
        message:'welcome to express'
    })
})

app.post('/', (req, res)=>{
    console.log('get atıldı')
     
        res.send({
            message:'run post'
        })
    })
app.put('/', (req, res)=>{
    console.log('get atıldı')
     
        res.send({
            message:'run put'
        })
    })
app.delete('/', (req, res)=>{
    console.log('get atıldı')
     
        res.send({
            message:'run delete'
        })
    })


/*------------------------*/
app.listen(PORT, () => {console.log(`Running: http://${HOST}:${PORT}`)});
