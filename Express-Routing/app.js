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

//!(1)
//?HTTP METHOD(GET,POST,PUT,DELETE) & URLs('/')
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
//?METHOD ALL (ALL=GET,POST,PUT,DELETE)

// app.all('/example', (req,res)=>{
//     res.send({
//         message:'run all'
//     })
// })

//!(3)
//?METHOD (APP.ROUTE)
// app.route('/route')
// .get((req,res)=>{res.send({message:'get'})})
// .post((req,res)=>{res.send({message:'post'})})
// .put((req,res)=>{res.send({message:'put'})})
// .delete((req,res)=>{res.send({message:'delete'})})

/*------------------------*/

//?URL (path) options
// app.get('/',(req,res)=>res.send('/ = root (home)'))
// app.get('/path',(req,res)=>res.send('/path = path'))

//?express-url supported JokerChars
// app.get('/abc(x)?123',(req,res)=>res.send('/abc(x)?123))
// app.get('/abc(x)+123',(req,res)=>res.send('/abc(x)+123))
// app.get('/abc*123',(req,res)=>res.send('/abc*123))
// app.get('/abc*123',(req,res)=>res.send('/abc*123))

//?express-url supported RegExr
// app.get(/xyz/,(req,res)=>res.send('/xyz/'))  /içerisinde yazılmalı/
// app.get(/xyz$/,(req,res)=>res.send('/xyz/'))    xyz ile biten
// app.get(/^\/xyz/,(req,res)=>res.send('/xyz/'))    /xyz ile başlayan    (\ işaretinden sonra gelen işareti özel karakter olarak algılama kaçış karakteri demek)

/*------------------------*/
//!URL Parameters (req.params)(: ile ifade edilir (:req.params) olur)(DİNAMİK KULLANIM)

// app.get("/users/:userID/profile", (req, res) => {
//     console.log(req.params)
//   res.send({
//     userID: req.params.userID
//   });
// });

//!URL=/users/(ANY)/profile/(ANY)/update/(ANY)
// app.get("/users/:userID/profile/update/:userData", (req, res) => {
//     console.log(req.params)
//   res.send({
//     userID: req.params.userID,
//     updating: req.params.userData,
//     url:{
//         url: {
//             protocol: req.protocol,
//             subdomains: req.subdomains,
//             hostname: req.hostname,
//             baseUrl: req.baseUrl,
//             params: req.params,
//             query: req.query,
//             path: req.path,
//             originalUrl: req.originalUrl,
//             url: req.url
//         }
//     }

//   });
// });


//!URL yapısı userID -> only number
// app.get('/users/:userID([0-9]+)',(req,res)=>{
//     console.log(req.params)
//     res.send({
//         userID:req.params.userID
//     })
// })

//!URL yapısı /users/123-ABC oldu not recommended
// app.get('/users/:userID([0-9]+)-:username([A-Z]+)',(req,res)=>{
//     console.log(req.params)
//     res.send({
//         userID:req.params.userID,
//         username:req.params.username
//     })
// })

/*------------------------*/

//? Response Methods

//? SendStatus:
// app.get('/', (req, res) => res.sendStatus(404))
//? Status:
// app.get('/', (req, res) => res.status(200).send({ message: 'OK' }))
// app.post('/', (req, res) => res.status(201).send({ message: 'Created' }))
// app.put('/', (req, res) => res.status(202).send({ message: 'Accepted' }))
// app.delete('/', (req, res) => res.status(204).send({ message: 'No Content' }))
//? JSON (.send() method already does this converting.)
// app.get('/', (req, res) => res.json([{ key: 'value' }]))
//? Download File (Download at browser):
// app.get('/download', (req, res) => res.download('./app.js', 'changedName.js'))
//? SendFile Content:
// console.log( __dirname )
// app.get('/file', (req, res) => res.sendFile(__dirname + '/app.js')) // FilePath must be realPath
//? Redirect:
// app.get('/google', (req, res) => res.redirect(301, 'https://www.google.com')) // 301 or 302
// app.get('/redirect', (req, res) => res.redirect(302, '/thisPath'))



app.listen(PORT, () => {console.log(`Running: http://${HOST}:${PORT}`);});
