import { printToDom } from "../helpers/util.js";
import { attachEvents } from "../helpers/buttonEvents.js";

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
    domString += `<div class="col">`
    domString += `<div class="card border-dark h-100" style="width: 18rem;">`
    domString += `<div class="card-body h-100">`
    domString += `<h5 class="card-title text-center">Breads</h5>`
    domString += `<p class="card-text text-center">Please select your bread choice.</p>`
    breads.forEach(bread => {
      domString += `<input id="checkbox${counter}"type="checkbox" name="bread" value="${bread.type}"> ${bread.type}<br>`
      counter ++
    });
    domString += `<div class="text-center mt-auto">`
    domString += `<button type="button" class="btn btn-secondary" id="breadButton">Add To Sammie</button>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
  printToDom(domString, 'breadDiv');
  attachEvents();
};



export {setBreads, getBreadz, breadsBuilder}