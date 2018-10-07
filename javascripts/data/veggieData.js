import {
  setVeggies,
  veggiesBuilder,
  getVeggiez
} from "../components/veggieComponent.js";

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  setVeggies(data.veggies);
  veggiesBuilder(getVeggiez());
}

function executeThisCodeIfXhrFails() {
  console.log("shit broke");
}

const getVeggies = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXhrFails);
  myRequest.open("GET", "./db/veggie.json");
  myRequest.send();
};
export { getVeggies };
