"use strict";

//? 1.yol
// const middleFunc1 = (req, res, next) => {
//   console.log("middleFunc1 is run");
//   req.message1 = "middleFunc1 run";
//   next();
// };

// const middleFunc2 = (req, res, next) => {
//   console.log("middleFunc2 is run");
//   req.message2 = "middleFunc1 run";
//   next();
// };

//  module.exports = [middleFunc1,middleFunc2]
// module.exports = {middleFunc1,middleFunc2}

//? 2.yol

// module.exports.middleFunc1 = (req, res, next) => {
//   console.log("middleFunc1 is run");
//   req.message1 = "middleFunc1 run";
//   next();
// };

// module.exports.middleFunc2 = (req, res, next) => {
//   console.log("middleFunc1 is run");
//   req.message1 = "middleFunc1 run";
//   next();
// };

//? 3.yol

module.exports = {
  middleFunc1: (req, res, next) => {
    console.log("middleFunc1 is run");
    req.message1 = "middleFunc1 run";
    next();
  },
  
  middleFunc2: (req, res, next) => {
    console.log("middleFunc2 is run");
    req.message2 = "middleFunc2 run";
    next();
  },
};
