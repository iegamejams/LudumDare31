"use strict";

function TapCityEngine() {
    Object.defineProperties(this, {
        'resources': {
            value: new ResourceManager(),
            configurable: false,
            writable: false
        },
        'startTime': {
            value: new Date(),
            configurable: false,
            writable: false
        }
    });
}

TapCityEngine.prototype = Object.create(Object.prototype);

Object.defineProperties(TapCityEngine.prototype, {
    getElapsedTime: {
        value: function getElapsedTime() {
            var currentTime = new Date();
            return currentTime - this.startTime;
        }
    }
})