"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
/*-----------------------------------------------*/
// ? Router is a special app for URL control in ExpressJS.

// app.get('/welcome', function(req,res){
//     res.send({
//         message:"welcome"
//     })
// })

// * express.Router()
// const router = express.Router();

// router.get("/", (req,res) => {res.send({ message: "welcome"}) });
// router.post("/", (req,res) => {res.send({ message: "post"}) });
// router.put("/", (req,res) => {res.send({ message: "put"}) });
// router.delete("/", (req,res) => {res.send({ message: "delete"}) });

// router.all("/", (req,res) => {res.send({ message: "all"}) });

// router.route('/')
//     .get((req,res) => {res.send({ message: "welcome"}) })
//     .post((req,res) => {res.send({ message: "post"}) })
//     .put((req,res) => {res.send({ message: "put"}) })
//     .delete((req,res) => {res.send({ message: "delete"}) });

// app e router kullandığımı bildiriyoruz
// app.use(router)

//? Router ayarlarını /router/index.js dosyasından al

// const router = require('./routes/index.js')
// const router = require('./routes/index')
const router = require("./routes/"); //default dosya ismi her zaman index.js tir.

app.use(router);

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
