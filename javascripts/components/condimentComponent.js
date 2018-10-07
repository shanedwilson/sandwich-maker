import { printToDom } from "../helpers/util.js";

let condiments = [];

const setCondiments = newArray => {
  condiments = newArray;
};

const getCondimentz = () => {
  return condiments;
};

const condimentsBuilder = () => {
  let domString = "";
    domString += `<div class="col">`
    domString += `<div class="card border-dark h-100" style="width: 18rem;">`
    domString += `<div class="card-body h-100">`
    domString += `<h5 class="card-title text-center">Condiments</h5>`
    domString += `<p class="card-text text-center">Please select your condiment choice.</p>`
    condiments.forEach(condiment => {
    domString += `<input type="radio" name="bread" value="white"> ${condiment.type}<br>`
    });
    domString += `<div class="text-center mt-auto">`
    domString += `<button type="button" class="btn btn-secondary">Add To Sammie</button>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
  printToDom(domString, 'condimentDiv');
}

export {setCondiments, getCondimentz, condimentsBuilder}