"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// Accept json data and conver to object
app.use(express.json());

app.all("/", (req, res) => {
  res.send("WELCOME TO DO API");
});
/*-----------------------------------------*/

//* SEQUELİZE
const {Sequelize,DataTypes} = require('sequelize')

// Connection
const sequelize = new Sequelize('sqlite:./db.sqlite3')


/*-----------------------------------------*/
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));