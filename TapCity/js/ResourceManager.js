"use strict";

(function () {
    var supportedResources = [
        "ore", "food", "units"
    ];

    Object.defineProperties(this, {
        ResourceManager: {
            value: function ResourceManager() {
                Object.defineProperties(this, {
                    resources: {
                        value: {},
                        configurable: false,
                        writable: false
                    }
                });

                supportedResources.forEach(function (resource) {
                    this.resources[resource] = 0;
                }, this);
                Object.seal(this.resources);
            }
        }
    });

    ResourceManager.prototype = Object.create(Object.prototype);

    Object.defineProperties(ResourceManager.prototype, {
        addResource: {
            value: function addResource(resourceType, resourceValue) {
                if (resourceValue < 0 && Math.abs(resourceValue) > this.resources[resourceType]) {
                    throw new Error("Negative resource value is out of range of available resources.")
                }
                this.resources[resourceType] += resourceValue;
            }
        },
        addFood: {
            value: function addFood(resourceValue) {
                if (resourceValue < 0 && Math.abs(resourceValue) > this.resources["food"]) {
                    throw new Error("Negative resource value is out of range of available resources.")
                }
                this.resources["food"] += resourceValue;
            }
        },
        addOre: {
            value: function addOre(resourceValue) {
                if (resourceValue < 0 && Math.abs(resourceValue) > this.resources["ore"]) {
                    throw new Error("Negative resource value is out of range of available resources.")
                }
                this.resources["ore"] += resourceValue;
            }
        },
        ore: {
            get: function get_ore() {
                return this.resources["ore"];
            }
        },
        food: {
            get: function get_food() {
                return this.resources["food"];
            }
        }
    });
}).call(window);