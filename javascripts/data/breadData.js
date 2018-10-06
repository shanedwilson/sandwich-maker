import {setBreads, breadsBuilder, getBreadz} from '../components/breadComponent.js'

function executeThisCodeAfterFileLoaded (){
const data = JSON.parse(this.responseText);
setBreads(data.breads);
breadsBuilder(getBreadz());
};

function executeThisCodeIfXhrFails () {
console.log('shit broke');
};

const getBreads = () => {
let myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
myRequest.addEventListener('error', executeThisCodeIfXhrFails);
myRequest.open('GET', './db/bread.json');
myRequest.send();
};
export {getBreads};