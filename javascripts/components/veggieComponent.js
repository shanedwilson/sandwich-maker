import { printToDom } from "../helpers/util.js";

let veggies = [];

const setVeggies = newArray => {
  veggies = newArray;
};

const getVeggiez = () => {
  return veggies;
};

const veggiesBuilder = () => {
  let domString = "";
  let counter = 0;
    domString += `<div class="col">`
    domString += `<div class="card border-dark h-100" style="width: 18rem;">`
    domString += `<div class="card-body h-100">`
    domString += `<h5 class="card-title text-center">Veggies</h5>`
    domString += `<p class="card-text text-center">Please select your veggies choice.</p>`
    veggies.forEach(veggie => {
      domString += `<input id="checkbox${counter}"type="checkbox" name="veggie" value="${veggie.type}"> ${veggie.type}<br>`
      counter ++;
    });
    domString += `<div class="text-center mt-auto">`
    domString += `<button type="button" class="btn btn-secondary">Add To Sammie</button>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
  printToDom(domString, 'veggieDiv');
}

export {setVeggies, getVeggiez, veggiesBuilder}