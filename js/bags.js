import Bag from './Bag.js';

const cachedBags = localStorage.getItem('bags');

/**
 * @type {undefined | Bag[]}
 */
let bags = JSON.parse(cachedBags)?.map(Bag.fromCached);

if (typeof bags === 'undefined') {
	bags = await import('./new-bags.js').then(module => module.default);
	
	localStorage.setItem('bags', JSON.stringify(bags));
	localStorage.setItem('bagsMap', JSON.stringify(bags.map(bag => [bag.id, bag])));
}

bags.sort(() => Math.random() < 0.5);

export default bags;