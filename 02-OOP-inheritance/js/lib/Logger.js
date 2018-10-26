"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class logger {
  constructor() {}

  log(info) {
    console.log("the " + info + " has been emitted");
  }

}

exports.default = logger;