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
    tick: {
        value: function tick() {
            /* TODO: If units/upgrades have changed recompute orePerSecond/foodPerSecond */
            this.resources.addOre(this.orePerSecond / this.ticksPerSecond);
            this.resources.addFood(this.foodPerSecond / this.ticksPerSecond);

            var foodConsumed = -(this.foodConsumedPerSecond / this.ticksPerSecond);
            if (foodConsumed > this.resources.food) {
                foodConsumed = this.resources.food;
                /* TODO: Warriors are rioting due to lack of food, halve effectiveness */
            }
            this.resources.addFood(foodConsumed);
        }
    }
})