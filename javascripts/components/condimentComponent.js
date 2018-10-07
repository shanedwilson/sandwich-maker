import { printToDom } from "../helpers/util.js";
import { condimentButtonEvent } from "../helpers/buttonEvents.js";
import { cartBuilder } from "./cartComponent.js";

let condiments = [];

const setCondiments = newArray => {
  condiments = newArray;
};

const getCondimentz = () => {
  return condiments;
};

const condimentsBuilder = () => {
  let domString = "";
  let counter = 0;
  domString += `<div class="col">`;
  domString += `<div class="card border-dark h-100" style="width: 18rem;">`;
  domString += `<div class="card-body h-100">`;
  domString += `<h5 class="card-title text-center">Condiments</h5>`;
  domString += `<p class="card-text text-center">Please select your condiment choice.</p>`;
  condiments.forEach(condiment => {
    domString += `<input class="condimentCheck" id="checkbox${counter}"type="checkbox" name="condiment" value="${
      condiment.type
    }"> ${condiment.type}<br>`;
    counter++;
  });
  domString += `<div class="text-center mt-auto">`;
  domString += `<button type="button" class="btn btn-secondary" id="condimentButton">Add To Sammie</button>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  printToDom(domString, "condimentDiv");
  condimentButtonEvent();
};

const addCondiment = () => {
  let condimentChecks = document.getElementsByClassName("condimentCheck");
  for (let i = 0; i < condimentChecks.length; i++) {
    if (condimentChecks[i].checked) {
      const selectedCondiments = condiments.filter(function(condiments) {
        return condiments.type === condimentChecks[i].value;
      });
      cartBuilder(selectedCondiments);
    }
  }
};

export { setCondiments, getCondimentz, condimentsBuilder, addCondiment };
