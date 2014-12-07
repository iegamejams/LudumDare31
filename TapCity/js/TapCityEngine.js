"use strict";

function TapCityEngine() {
    Object.defineProperties(this, {
        'resources': {
            value: new ResourceManager(),
            configurable: false,
            writable: false
        },
        'startTime': {
            value: new Date(),
            configurable: false,
            writable: false
        },
        'ticksPerSecond': {
            value: 30,
            configurable: false,
            writable: false
        },
        'orePerSecond': {
            value: 0,
            configurable: false,
            writable: true
        },
        'foodPerSecond': {
            value: 0,
            configurable: false,
            writable: true
        },
        'foodConsumedPerSecond': {
            value: 0,
            configurable: false,
            writable: true
        },
        'monsterManager': {
            value: new MonsterManager(),
            configurable: false,
            writable: false
        },
        'town': {
            value: new TownManager(),
            configurable: false,
            writable: false
        }
    });
}

TapCityEngine.prototype = Object.create(Object.prototype);

Object.defineProperties(TapCityEngine.prototype, {
    getElapsedTime: {
        value: function getElapsedTime() {
            var currentTime = new Date();
            return currentTime - this.startTime;
        }
    },
    clickOre: {
        value: function clickOre() {
            this.resources.addOre(1);
        },
    },
    clickFood: {
        value: function clickFood() {
            this.resources.addFood(1);
        }
    },
    clickTown: {
        value: function clickTown() {
            this.town.manualBuild();
        }
    },
    tick: {
        value: function tick() {
            /* TODO: If units/upgrades have changed recompute orePerSecond/foodPerSecond */
            this.resources.addOre(this.orePerSecond / this.ticksPerSecond);
            this.resources.addFood(this.foodPerSecond / this.ticksPerSecond);

            var warriorEffectiveness = 1.0;
            var foodConsumed = -(this.foodConsumedPerSecond / this.ticksPerSecond);
            if (foodConsumed > this.resources.food) {
                foodConsumed = this.resources.food;
                warriorEffectiveness = 0.5;
            }
            this.resources.addFood(foodConsumed);

            this.monsterManager.update(this.town.level, this.getElapsedTime());

            /* TODO: Grab the monster and apply warrior damage, using warriorEffectiveness */
        }
    }
})