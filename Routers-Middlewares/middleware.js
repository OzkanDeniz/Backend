"use strict";

const express = require("express");
const { middleFunc1, middleFunc2 } = require("./middlewares");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

//? Middleware functions must be has three parameters
//? Last parameters is for next()

//? Middleware
// app.get("/", (req, res, next) => {
//   console.log("middleware started");

//   next();
//   //next ten sonra kod  hataya neden olur
// //   res.send({
// //     message: "middleware out",
// //   });
// });

//? Routh_Path
// app.get("/", (req, res) => {
//   console.log("route started");

//   res.send({
//     message: "welcome",
//   });
// });

// app.get("/", (req, res, next) => {
//   if (req.query.username == "clarusway") {
//     //?req ve res ile data taşıma:
//     //next() ile req ve res bir sonraki route a aktarılır
//     req.username = "clarusway";
//     res.message = 'username is clarusway'
//     next();

//   } else {
//     res.send({
//       message: " Error: username is wrong",
//     });
//   }
// });

// app.get("/", (req, res) => {
//   res.send({
//     username: req.username,
//     // message: "username is true",
//     message: res.message
//   });
// });

//? Data Taşıma
// app.get("/", (req, res, next) => {
//   req.message1 = "middleware1";
//   next();
// });
// app.get("/", (req, res, next) => {
//   req.message2 = "middleware2";
//   next();
// });
// app.get("/", (req, res, next) => {
//   req.message3 = "middleware3";
//   next();
// });
// app.get("/", (req, res, next) => {
//   req.message4 = "middleware4";
//   next();
// });
// app.get("/", (req, res, next) => {
//   req.message5 = "middleware5";
//   next();
// });

// app.get("/", (req, res) => {
//   res.send({
//     message1: req.message1,
//     message2: req.message2,
//     message3: req.message3,
//     message4: req.message4,
//     message5: req.message5,
//     message: "Finished",
//   });
// });

//? Middleware Func
// const middleFunc1 = (req, res, next) => {
//   console.log('middleFunc1 is run')
//   req.message1 = 'middleFunc1 run'
//   // next()
//   next('route') //bir route atlayarak sonraki route a geç
// };

// const middleFunc2 = (req, res, next) => {
//   console.log('middleFunc2 is run')
//   req.message2 = 'middleFunc1 run'
//   next()
// };

//? app.use(middleFunc1,middleFunc2)
//! app.use([middleFunc1,middleFunc2]) All methods (recommended)
// app.get('/home',[middleFunc1,middleFunc2]) get method (url must be)

//! Ayrıca app.use kullanmadan path routerda middleware gönderebiliriz

// app.get('/home',[middleFunc1,middleFunc2],(req,res)=>{
//   res.send({
//     message1: req.message1,
//     message2: req.message2,
//     message:'Finished'
//   })

// })
// app.get('/home',(req,res)=>{
//   res.send({
//     message1: req.message1,
//     message2: req.message2,
//     message:'next.Route Finished'
//   })

// })

//? İmport
// const middleFuncs = require('./middlewares/index')
// app.use(middleFuncs)

//? Hem array hemde object olarak alabiliriz
// const [middleFunc1,middleFunc2] = require('./middlewares/index')
// const {middleFunc1,middleFunc2 }= require('./middlewares/index')
// app.use(middleFunc1,middleFunc2)


app.get("/",middleFunc1,middleFunc2,(req, res) => {
  res.send({
    message1: req.message1,
    message2: req.message2,
    message: "Finished",
  });
});

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
