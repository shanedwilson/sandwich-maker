import {
  setCheeses,
  cheesesBuilder,
  getCheesez
} from "../components/cheeseComponent.js";

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  setCheeses(data.cheeses);
  cheesesBuilder(getCheesez());
}

function executeThisCodeIfXhrFails() {
  console.log("shit broke");
}

const getCheeses = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXhrFails);
  myRequest.open("GET", "./db/cheese.json");
  myRequest.send();
};
export { getCheeses };
