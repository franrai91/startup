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