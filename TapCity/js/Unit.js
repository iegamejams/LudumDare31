function Unit(unitName) {
    Object.defineProperties(this, {
        name: {
            value: unitName,
            writable: false,
            configurable: false
        }
    })
}