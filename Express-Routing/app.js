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
//!(1)
// app.get('/', (req, res)=>{
// console.log('get atıldı')
 
//     res.send({
//         message:'welcome to express'
//     })
// })

// app.post('/', (req, res)=>{
//     console.log('get atıldı')
     
//         res.send({
//             message:'run post'
//         })
//     })
// app.put('/', (req, res)=>{
//     console.log('get atıldı')
     
//         res.send({
//             message:'run put'
//         })
//     })
// app.delete('/', (req, res)=>{
//     console.log('get atıldı')
     
//         res.send({
//             message:'run delete'
//         })
//     })

//!(2)
//METHOD ALL (ALL=GET,POST,PUT,DELETE)

// app.all('/example', (req,res)=>{
//     res.send({
//         message:'run all'
//     })
// })

//!(3)
//METHOD (APP.ROUTE)
app.route('/route')
.get((req,res)=>{res.send({message:'get'})})
.post((req,res)=>{res.send({message:'post'})})
.put((req,res)=>{res.send({message:'put'})})
.delete((req,res)=>{res.send({message:'delete'})})



/*------------------------*/
app.listen(PORT, () => {console.log(`Running: http://${HOST}:${PORT}`)});
