import {setCondiments, condimentsBuilder, getCondimentz} from '../components/condimentComponent.js'

function executeThisCodeAfterFileLoaded (){
const data = JSON.parse(this.responseText);
setCondiments(data.condiments);
condimentsBuilder(getCondimentz());
};

function executeThisCodeIfXhrFails () {
console.log('shit broke');
};

const getCondiments = () => {
let myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
myRequest.addEventListener('error', executeThisCodeIfXhrFails);
myRequest.open('GET', './db/condiment.json');
myRequest.send();
};
export {getCondiments};