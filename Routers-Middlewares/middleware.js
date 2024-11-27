"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

//? Middleware functions must be has three parameters
//? Last parameters is for next()

//?Middleware
// app.get("/", (req, res, next) => {
//   console.log("middleware started");

//   next();
//   //next ten sonra kod  hataya neden olur
// //   res.send({
// //     message: "middleware out",
// //   });
// });

//?Routh_Path
// app.get("/", (req, res) => {
//   console.log("route started");

//   res.send({
//     message: "welcome",
//   });
// });

app.get("/", (req, res, next) => {
  if (req.query.username == "clarusway") {
    next();
  } else {
    res.send({
      message: " Error: username is wrong",
    });
  }
});

app.get("/", (req, res) => {
  res.send({
    message: "username is true",
  });
});

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
