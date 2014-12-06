function UnitList(resourceGenerate, resourceConsumed) {
    Object.defineProperties(this, {
        units: {
            value: [],
            configurable: false,
            writable: false
        }
    })
}

Object.defineProperties(UnitList, {
    createUnitList: {
        value: function createUnitList(resourceGenerate, resourceConsumed, units) {
            var unitList = new UnitList(resourceGenerate, resourceConsumed);
            units.forEach(function (unit) {
                unitList.units.push(new Unit(unit));
            }, unitList);

            Object.seal(unitList.units);
            Object.seal(unitList);
            return unitList;
        }
    }
});