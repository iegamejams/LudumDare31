"use strict";

function TownManager() {
    Object.defineProperties(this, {
        level: {
            value: 1,
            configurable: false,
            writable: true
        },
        currentBuildPoints: {
            value: 0,
            configurable: false,
            writable: true
        },
        buildPointsToNextLevel: {
            value: 125,
            configurable: false,
            writable: true
        },
        manualFoodTechLevel: {
            value: 1,
            configurable: false,
            writable: true
        },
        manualFoodperCkick: {
            value: 1,
            configurable: false,
            writable: true
        },
        manualOreTechLevel: {
            value: 1,
            configurable: false,
            writable: true
        },
        manualOreperCkick: {
            value: 1,
            configurable: false,
            writable: true
        },
        manualBuildTechLevel: {
            value: 1,
            configurable: false,
            writable: true
        },
        manualBPperClick: {
            value: 1,
            configurable: false,
            writable: true
        },
        buildPointPerSecond: {
            value: 0,
            configurable: false,
            writable: true
        },
        unitManager: {
            value: new UnitManager(),
            configurable: false,
            writable: false
        }
    });

    this.unitManager.maxUnit = 100;
}

TownManager.prototype = Object.create(Object.prototype);

Object.defineProperties(TownManager.prototype, {
    checkLevelUp: {
        value: function () {
            if (this.currentBuildPoints >= this.buildPointsToNextLevel) {
                this.currentBuildPoints = this.currentBuildPoints - this.buildPointsToNextLevel;
                this.level++;
                //Current Build Points required to next level is effectively on power series - 5^3, 7^3, 9^3, etc.  Revisit as needed.
                var points = (this.level * 2) + 3;
                this.buildPointsToNextLevel = Math.pow(points, 3);
                var unitCount = (this.level * 2) + 8;
                this.unitManager.maxUnit = Math.pow(unitCount, 2);
            }
        },
        configurable: false,
        writable: false
    },
    manualBuild: {
        value: function () {
            this.currentBuildPoints += this.manualBPperClick;
        },
        configurable: false,
        writable: false
    },
    manualBuildTechLevelChange: {
        value: function (newLevel) {
            this.manualBuildTechLevel = newLevel;
            //For Each Level after 1, multiply by four.
            this.manualBPperClick = Math.pow(4, (newLevel - 1));
        },
        configurable: false,
        writable: false
    },
    manualFoodTechLevelChange: {
        value: function (newLevel) {
            this.manualFoodTechLevel = newLevel;
            //For Each Level after 1, multiply by three.
            this.manualFoodperCkick = Math.pow(3, (newLevel - 1));
        },
        configurable: false,
        writable: false
    },
    manualOreTechLevelChange: {
        value: function (newLevel) {
            this.manualOreTechLevel = newLevel;
            //For Each Level after 1, multiply by 2.
            this.manualOreperCkick = Math.pow(2, (newLevel - 1));
        },
        configurable: false,
        writable: false
    },
    printString: {
        value: function () {
            return "Town Level: " + this.level + ", " + Math.floor(this.currentBuildPoints) + "/" + this.buildPointsToNextLevel + " Points for next level. " + this.unitManager.currentUnit + "/" + this.unitManager.maxUnit + " Units in play.";
        }
    }
});