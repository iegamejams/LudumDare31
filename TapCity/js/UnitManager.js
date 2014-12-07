function UnitManager() {
    this.miners = UnitList.createUnitList("ore", null, ["miners", "ore carts", "explosives", "heavy machinery"]);
    this.farmers = UnitList.createUnitList("food", null, ["farmers", "oxe ploughs", "irrigation", "green houses"]);
    this.warriors = UnitList.createUnitList(null, "food", ["warriors", "berserkers", "archers", "chariots"]);
    this.maxUnit = 0;
    this.currentUnit = 0;
}

UnitManager.prototype = Object.create(Object.prototype);

Object.defineProperties(UnitManager.prototype, {
    buyUnit: {
        value: function buyUnit(index, number, unitList) {
            if (index >= 0 && index < unitList.units.length) {
                if (this.currentUnit + number <= this.maxUnit) {
                    unitList.units[index].count += number;
                    this.currentUnit += number;
                }
            }
            else {
                //TODO: Throw exception?
            }
        }
    }
});