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
        manualBuildTechLevel: {
            value: 1,
            configurable: false,
            writable: true
        },
        manualBPperCkick: {
        value: 1,
        configurable: false,
        writable: true
    }
    });
}

TownManager.prototype = Object.create(Object.prototype);

Object.defineProperties(TownManager.prototype, {
    checkLevelUp: {
        value: function () {
            if(this.currentBuildPoints >= this.buildPointsToNextLevel)
            {
                this.currentBuildPoints = this.currentBuildPoints - this.buildPointsToNextLevel;
                this.level++;
                //Current Build Points required to next level is effectively on power series - 5^3, 7^3, 9^3, etc.  Revisit as needed.
                var points = (this.level * 2) + 3;
                this.buildPointsToNextLevel = Math.pow(points, 3);
            }
        },
        configurable: false,
        writable: false
    },
    manualBuild: {
        value: function () {
            this.currentBuildPoints += this.manualBPperCkick;
        },
        configurable: false,
        writable: false
    },
    manualBuildTechLevelChange: {
        value: function(newLevel) {
            this.manualBuildTechLevel = newLevel;
            //For Each Level after 1, multiply by four.
            this.manualBPperCkick = Math.pow(4, (newLevel - 1));
        },
        configurable: false,
        writable: false
    }
});