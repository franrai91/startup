"use strict";
const babel = require("@babel/core");

babel.transform("code", optionsObject);

var _Movie = _interopRequireDefault(require("./Movie.js"));

var _Actor = _interopRequireDefault(require("./Actor.js"));

var _Logger = _interopRequireDefault(require("./Logger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = "Terminator";
var year = "1991";
var duration = "90";
let example = new _Movie.default(name, year, duration);
const actors = [new _Actor.default('Paul Winfield', 50), new _Actor.default('Michael Biehn', 50), new _Actor.default('Linda Hamilton', 50)];
var logge = new _Logger.default();
example.addCast(actors);
example.on("play", logge.log("play"));
example.play();
example.share("Juan");
example.like("Pedro");
