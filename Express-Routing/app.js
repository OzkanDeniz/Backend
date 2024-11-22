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


app.get("/users/:userID/profile/update/:userData", (req, res) => {
    console.log(req.params)
  res.send({
    userID: req.params.userID,
    updating: req.params.userData,
    url:{
        url: {
            protocol: req.protocol,
            subdomains: req.subdomains,
            hostname: req.hostname,
            baseUrl: req.baseUrl,
            params: req.params,
            query: req.query,
            path: req.path,
            originalUrl: req.originalUrl,
            url: req.url
        }
    }

  });
});




app.listen(PORT, () => {console.log(`Running: http://${HOST}:${PORT}`);});
