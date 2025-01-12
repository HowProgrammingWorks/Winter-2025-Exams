"use strict";

const check = require("../check.js");

const cases = [
  [[["Roma", "Kiev", "Beijing", "Barcelona", "Omsk"]], "Barcelona"],
  [[["Barcelona", "Roma", "Kiev", "Beijing", "Omsk"]], "Barcelona"],
  [[["Roma", "Kiev", "Beijing", "Omsk", "Barcelona"]], "Barcelona"],
  [[["Roma", "Kiev", "Omsk"]], "Roma"],
  [[["Roma"]], "Roma"],
];

check(cases)("longest");
