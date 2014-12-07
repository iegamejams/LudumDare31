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
        },
        computeXperSecond: {
            value: function () {
                var totalValue = 0;
                for (var i = 0; i < this.units.length; i++) {
                    if (this.units[i].count > 0)
                    {
                        totalValue += this.units[i].count * Math.pow(2, i);
                    }
                }
                return totalValue;
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