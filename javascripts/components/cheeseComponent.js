import { printToDom } from "../helpers/util.js";
import { cheeseButtonEvent } from "../helpers/buttonEvents.js";

let cheeses = [];

const setCheeses = newArray => {
  cheeses = newArray;
};

const getCheesez = () => {
  return cheeses;
};

const cheesesBuilder = () => {
  let domString = "";
  let counter = 0;
    domString += `<div class="col">`
    domString += `<div class="card border-dark h-100" style="width: 18rem;">`
    domString += `<div class="card-body h-100">`
    domString += `<h5 class="card-title text-center">Cheeses</h5>`
    domString += `<p class="card-text text-center">Please select your cheese choice.</p>`
    cheeses.forEach(cheese => {
      domString += `<input id="checkbox${counter}"type="checkbox" name="cheese" value="${cheese.type}"> ${cheese.type}<br>`
    counter ++
    });
    domString += `<div class="text-center mt-auto">`
    domString += `<button type="button" class="btn btn-secondary" id="cheeseButton">Add To Sammie</button>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
  printToDom(domString, 'cheeseDiv');
  cheeseButtonEvent();
}

export {setCheeses, getCheesez, cheesesBuilder}