"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

//! olması gereken
// app.get('/user/:id?',(req,res)=>{
//     res.status(200).send({userId: 1, userName: 'John'})
// })

//! iki faklı send
// app.get('/user/:id?', function(req,res){
//     res.status(200).send({userId: 1, userName: 'John'})   burada sadece John response u alırız
//     res.status(200).send({userId: 2, userName: 'Wick'})   burasında hata verir çünkü zaten John u response etti
// })

//! default hata çıkışı
// app.get('/user/:id?', function(req,res){
//     req.params.id.toString() toString hata versin diye yazdık id yazmayınca string e çevirelecek bişey olmadığından hata alırız
//     res.send({userId: 1, userName: 'John'})
// })

//! Throw Error
// app.get('/user/:id?', function(req,res){
//     throw Error("Hata oluştu")
//     res.send({userId: 1, userName: ' John'})
// })

//! Try Catch
// app.get("/user/:id?", function (req, res) {
//   try {
//     req.params.id.toString()
//     res.send({ userId: 1, userName: " John" });
//   } catch (error) {
//     // throw Error('id must be string')
//     // res.status(404).send('id must be string')
//     res.status(404).send({isError:true, message :'id must be string'})
//   }
// });

//? Middleware
// app.get("/user/:id?", function (req, res, next) {
//   throw Error("Hata oluştu");
//   res.send({ useId: 1, userName: "John" });
// });

// const errorHandlerFunction = (err, req, res, next) => {
//     res.status(400).send({ isError: true, message: err.message });
//   };

// app.use(errorHandlerFunction);



//?
app.get("/user/:id?", function (req, res, next) {
  throw Error("Hata oluştu");
  res.send({ useId: 1, userName: "John" });
});














app.use("*", (req, res) => {
  res.status(404).send("The route is not found");
});

const errorHandlerFunction = (err, req, res, next) => {
  res.status(400).send({ isError: true, message: err.message });
};

app.use(errorHandlerFunction);

app.listen(PORT, () => console.log("Running: http://127.0.0.1" + PORT));
