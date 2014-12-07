function UnitList(resourceGenerate, resourceConsumed) {
    Object.defineProperties(this, {
        units: {
            value: [],
            configurable: false,
            writable: false
        },
        printString: {
            value: function printString() {
                var totalString = "";
                for (var i = 0; i < this.units.length; i++) {
                    if (i > 0) {
                        totalString += ", ";
                    }
                    totalString += this.units[i].printString();
                }

                return totalString;
            }
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
    },
});