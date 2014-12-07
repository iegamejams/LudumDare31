function UnitManager() {
    this.miners = UnitList.createUnitList("ore", null, ["miners", "ore carts", "explosives", "heavy machinery"]);
    this.farmers = UnitList.createUnitList("food", null, ["farmers", "oxe ploughs", "irrigation", "green houses"]);
    this.warriors = UnitList.createUnitList(null, "food", ["warriors", "berserkers", "archers", "chariots"]);
    this.maxUnit = 0;
}

UnitManager.prototype = Object.create(Object.prototype);

Object.defineProperties(UnitManager.prototype, {
});