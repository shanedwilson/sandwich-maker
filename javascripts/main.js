import { getBreads } from './data/breadData.js';
import { getCheeses } from './data/cheeseData.js';
// import { sortEvents } from './events.js';

const initializeApp = () => {
    getBreads();
    getCheeses();
    // sortEvents();
};

initializeApp();