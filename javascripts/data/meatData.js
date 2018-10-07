import {setMeats, meatsBuilder, getMeatz} from '../components/meatComponent.js'

function executeThisCodeAfterFileLoaded (){
const data = JSON.parse(this.responseText);
setMeats(data.meats);
meatsBuilder(getMeatz());
};

function executeThisCodeIfXhrFails () {
console.log('shit broke');
};

const getMeats = () => {
let myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
myRequest.addEventListener('error', executeThisCodeIfXhrFails);
myRequest.open('GET', './db/meat.json');
myRequest.send();
};
export {getMeats};