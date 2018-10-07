import { getBreads } from './data/breadData.js';
import { getCheeses } from './data/cheeseData.js';
import { getCondiments } from './data/condimentData.js';
import { getMeats } from './data/meatData.js';
import { getVeggies } from './data/veggieData.js';


// import { sortEvents } from './events.js';

const initializeApp = () => {
    getBreads();
    getCheeses();
    getCondiments();
    getMeats();
    getVeggies();
    // sortEvents();
};

initializeApp();