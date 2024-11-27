"use strict";

const middleFunc1 = (req, res, next) => {
  console.log("middleFunc1 is run");
  req.message1 = "middleFunc1 run";
  next();
};

const middleFunc2 = (req, res, next) => {
  console.log("middleFunc2 is run");
  req.message2 = "middleFunc1 run";
  next();
};

// module.exports = [middleFunc1,middleFunc2]
module.exports = {middleFunc1,middleFunc2}