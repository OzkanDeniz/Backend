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
const { Sequelize, DataTypes } = require("sequelize");

// Connection
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)
const sequelize = new Sequelize(
  "sqlite:" + process.env.SQLITE || "./db.sqlite3"
);

//MODEL
// Her model,veritabanında bir tabloya karşılık gelir
// sequelize.define('tableName', {tableDetails}) bir model oluşturmak için gereken komutlar

//Model isimleri PascalCase(Todo) yazılır
const Todo = sequelize.define("todos", {
  //* id yi otomatik olarak oluşturur
  // id: { type: DataTypes.INTEGER,
  //   allowNull:false, //default: true
  //   unique:true, //default: false
  //   comment:'description',
  //   primaryKey:true, //default: false
  //   autoIncrement:true //default: false
  //  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: DataTypes.TEXT,

  priority: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0,
  },

  isdone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  // createdAt: {},
  // updatedAt: {},
  // Sequelize otomatik  yönetir

  
});

//*Syncronization
sequelize.sync()


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
