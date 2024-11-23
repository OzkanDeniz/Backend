"use strict";

//* express.Router()
// const express = require("express")
// const router = express.Router();
const router = require(express).Router();

// router.get("/", (req,res) => {res.send({ message: "welcome"}) });
// router.post("/", (req,res) => {res.send({ message: "post"}) });
// router.put("/", (req,res) => {res.send({ message: "put"}) });
// router.delete("/", (req,res) => {res.send({ message: "delete"}) });


// router.all("/", (req,res) => {res.send({ message: "all"}) });


router.route('/')
    .get((req,res) => {res.send({ message: "welcome"}) })
    .post((req,res) => {res.send({ message: "post"}) })
    .put((req,res) => {res.send({ message: "put"}) })
    .delete((req,res) => {res.send({ message: "delete"}) });


//app e router kullandığımı bildiriyoruz
module.exports = router
