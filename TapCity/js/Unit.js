function Unit(unitName) {
    Object.defineProperties(this, {
        name: {
            value: unitName,
            writable: false,
            configurable: false
        },
        count: {
            value: 0,
            writable: true,
            configurable: false
        }
    })
}

Unit.prototype = Object.create(Object.prototype);

Object.defineProperties(Unit.prototype, {
});