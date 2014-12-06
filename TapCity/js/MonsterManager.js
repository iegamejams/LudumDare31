"use strict";

function MonsterManager() {
    Object.defineProperties(this, {
        lastUpdatedTime: {
            value: 0,
            configurable: false,
            writable: true
        }
    });
}

MonsterManager.prototype = Object.create(Object.prototype);

Object.defineProperties(MonsterManager.prototype, {
    cityLevelToStartAt: {
        value: 0, //In the beginning, we attack from the start. 
        configurable: false,
        writable: true
    },
    monsterAttackChance: {
        value: .5,
        configurable: false,
        writable: true
    },
    monsterGenerationInterval: {
        value: 60000,
        configurable: false,
        writable: true
    },
    monsterAttackTimeForewarning: {
        value: 300000,
        configurable: false,
        writable: true
    },

    update: {
    value: function update(cityLevel, elapsedTime) {
        var currentTime = new Date();
        if (cityLevel >= this.cityLevelToStartAt)
        {
            if(this.lastUpdatedTime == 0)
            {
                this.lastUpdatedTime = elapsedTime;
            }

            if(this.lastUpdatedTime + this.monsterGenerationInterval <= elapsedTime)
            {
                var rand = Math.random();
                if (rand < this.monsterAttackChance)
                {
                    //TODO: Create Monster Attack based on City Size to attack in the future.
                }
                this.lastUpdatedTime = elapsedTime;
            }
        }
    }
}
});

//Monsters give 5 minutes (300,000 MS) advanced Warning
//Monsters start only when Elapsed Time > Start Attack Time OR City Level > X
//Monsters should be composed of Monster Image, Current HP, Max HP, Attack Val, Defense Val, Resources for Loot (Gems, Building Materials, Food)
