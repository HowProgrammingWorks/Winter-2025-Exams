"use strict";

const check = require("../check.js");

const cases = [
  [['Hello "Marcus"! Ave "Marcus"!'], "Hello «Marcus»! Ave «Marcus»!"],
  [['"Marcus"! Ave "Marcus"!'], "«Marcus»! Ave «Marcus»!"],
  [['Hello "Marcus"! Ave "Marcus"'], "Hello «Marcus»! Ave «Marcus»"],
  [['"Marcus" Ave!'], "«Marcus» Ave!"],
  [['Ave! "Marcus"'], "Ave! «Marcus»"],
  [['"Marcus"'], "«Marcus»"],
  [["Marcus"], "Marcus"],
  [['""'], "«»"],
  [[""], ""],
];

check(cases)("quotes");
