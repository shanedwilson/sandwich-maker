import { printToDom } from "../helpers/util.js";

let cheeses = [];

const setCheeses = newArray => {
  cheeses = newArray;
};

const getCheesez = () => {
  return cheeses;
};

const cheesesBuilder = () => {
  let domString = "";
    domString += `<div class="col">`
    domString += `<div class="card border-dark h-100" style="width: 18rem;">`
    domString += `<div class="card-body h-100">`
    domString += `<h5 class="card-title text-center">Cheeses</h5>`
    domString += `<p class="card-text text-center">Please select your cheese choice.</p>`
    cheeses.forEach(cheese => {
    domString += `<input type="radio" name="bread" value="white"> ${cheese.type}<br>`
    });
    domString += `<div class="text-center mt-auto">`
    domString += `<button type="button" class="btn btn-secondary">Add To Sammie</button>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
  printToDom(domString, 'cheeseDiv');
}

export {setCheeses, getCheesez, cheesesBuilder}