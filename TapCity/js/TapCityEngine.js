"use strict";

function TapCityEngine() {
    Object.defineProperties(this, {
        'resources': {
            value: new ResourceManager(),
            configurable: false,
            writable: false
        }
    });
}

TapCityEngine.prototype = Object.create();

Object.defineProperties(TapCityEngine.prototype, {

})