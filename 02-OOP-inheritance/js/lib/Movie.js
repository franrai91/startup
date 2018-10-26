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