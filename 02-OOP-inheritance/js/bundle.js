"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class actor {
  constructor(tempName, tempAge) {
    this.name = tempName;
    this.age = tempAge;
  }

}

exports.default = actor;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

class EventEmitter {
  constructor() {
    this.event = {};
  }

  on(eventName, callback) {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }

    this.event[eventName].push(callback);
  }

  emit(eventName) {
    const emmet = this.event[eventName];

    if (emmet) {
      emmet.forEach(funct => {
        funct.call(this);
      });
    }
  }

  off(eventName, callback) {
    if (this.event[eventName]) {
      this.event[eventName].delete(callback);
    }
  }

}

exports.default = EventEmitter;
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
"use strict";

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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _EventEmiter = _interopRequireDefault(require("./EventEmiter.js"));

var _SocialMixing = _interopRequireDefault(require("./SocialMixing.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Movie extends _EventEmiter.default {
  constructor(tempTitle, tempYear, tempDuration) {
    super();
    this.title = tempTitle;
    this.year = tempYear;
    this.duration = tempDuration;
    Object.assign(this, _SocialMixing.default);
  }

  play() {
    this.emit("Play");
  }

  pause() {
    this.emit("Pause");
  }

  resume() {
    this.emit("Resume");
  }

  addCast(cast) {
    if (!this.cast) {
      this.cast = [];
    }

    if (Array.isArray(cast)) {
      cast.forEach(actor => {
        this.cast.push(actor);
      });
    } else {
      this.cast.push(cast);
    }
  }

}

exports.default = Movie;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var socialMixing = {
  share(friendName) {
    console.log(friendName + " share " + this.title);
  },

  like(friendName) {
    console.log(friendName + ' like ' + this.title);
  }

};
var _default = socialMixing;
exports.default = _default;
