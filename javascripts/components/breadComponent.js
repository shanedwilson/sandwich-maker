import { printToDom } from "../helpers/util.js";
import { breadButtonEvent } from "../helpers/buttonEvents.js";
import { cartBuilder } from "./cartComponent.js";

let breads = [];

const setBreads = newArray => {
  breads = newArray;
};

const getBreadz = () => {
  return breads;
};

const breadsBuilder = () => {
  let domString = "";
  let counter = 0;
  domString += `<div class="col">`;
  domString += `<div class="card border-dark h-100 mb-3" style="width: 18rem;">`;
  domString += `<div class="card-body h-100">`;
  domString += `<h5 class="card-title text-center">Breads</h5>`;
  domString += `<p class="card-text text-center">Please select your bread choice.</p>`;
  breads.forEach(bread => {
    domString += `<input class="breadCheck" id="checkbox${counter}" type="checkbox" name="bread" value="${
      bread.type
    }"> ${bread.type}<br>`;
    counter++;
  });
  domString += `<div class="text-center mt-auto">`;
  domString += `<button type="button" class="btn btn-secondary" id="breadButton">Add To Sammie</button>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  printToDom(domString, "breadDiv");
  breadButtonEvent();
};

const addBread = () => {
  let breadChecks = document.getElementsByClassName("breadCheck");
  for (let i = 0; i < breadChecks.length; i++) {
    if (breadChecks[i].checked) {
      const selectedBreads = breads.filter(function(breads) {
        return breads.type === breadChecks[i].value;
      });
      cartBuilder(selectedBreads);
    }
  }
};

export { setBreads, getBreadz, breadsBuilder, addBread };
