import { printToDom } from "../helpers/util.js";
import { veggieButtonEvent } from "../helpers/buttonEvents.js";
import { cartBuilder } from "./cartComponent.js";

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
  domString += `<div class="col">`;
  domString += `<div class="card border-dark h-100" style="width: 18rem;">`;
  domString += `<div class="card-body h-100">`;
  domString += `<h5 class="card-title text-center">Veggies</h5>`;
  domString += `<p class="card-text text-center">Please select your veggies choice.</p>`;
  veggies.forEach(veggie => {
    domString += `<input class="condimentCheck"id="checkbox${counter}"type="checkbox" name="veggie" value="${
      veggie.type
    }"> ${veggie.type}<br>`;
    counter++;
  });
  domString += `<div class="text-center mt-auto">`;
  domString += `<button type="button" class="btn btn-secondary" id="veggieButton">Add To Sammie</button>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  printToDom(domString, "veggieDiv");
  veggieButtonEvent();
};

const addVeggie = () => {
  let veggieChecks = document.getElementsByClassName("condimentCheck");
  for (let i = 0; i < veggieChecks.length; i++) {
    if (veggieChecks[i].checked) {
      const selectedVeggies = veggies.filter(function(veggies) {
        return veggies.type === veggieChecks[i].value;
      });
      cartBuilder(selectedVeggies);
      console.log(selectedVeggies);
    }
  }
};

export { setVeggies, getVeggiez, veggiesBuilder, addVeggie };
