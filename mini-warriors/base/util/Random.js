class Random {
	
	constructor(){};
	
	basic = function(min, max, round = true) {
                let rand = min + Math.random() * (max + 1 - min);
                return round ? Math.round(rand) : rand;
        }
				
	chance = function(percent) {
		return this.basic(0, 100, false) <= percent ? true : false;
	}
	
	seed(seed) {
                let value = seed;

                return function(seed, min, max) {
                        value = Math.trunc( (seed * 16807 / 2147483647)*10);
                        return min + value * (max + 1 - min);
                }
        }
}

function randomSeed(seed, min, max) {
                        value = Math.round((seed * 16807 % 2147483647).toString()[0]) / 10;
                        return Math.floor(min + value * (max + 1 - min));
                }