'use strict'

const users = require("./users");
const main = require("./main");
const one = require("./one")

module.exports = function(app) {
  users(app);
  main(app);
  one(app);
}

