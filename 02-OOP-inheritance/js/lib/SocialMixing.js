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