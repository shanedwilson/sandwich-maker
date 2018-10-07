import { printToDom } from "../helpers/util.js";
import { meatButtonEvent } from "../helpers/buttonEvents.js";
import { cartBuilder } from "./cartComponent.js";

let meats = [];

const setMeats = newArray => {
  meats = newArray;
};

const getMeatz = () => {
  return meats;
};

const meatsBuilder = () => {
  let domString = "";
  let counter = 0;
  domString += `<div class="col">`;
  domString += `<div class="card border-dark h-100" style="width: 18rem;">`;
  domString += `<div class="card-body h-100">`;
  domString += `<h5 class="card-title text-center">Meats</h5>`;
  domString += `<p class="card-text text-center">Please select your meat choice.</p>`;
  meats.forEach(meat => {
    domString += `<input class="meatCheck" id="checkbox${counter}"type="checkbox" name="meat" value="${
      meat.type
    }"> ${meat.type}<br>`;
    counter++;
  });
  domString += `<div class="text-center mt-auto">`;
  domString += `<button type="button" class="btn btn-secondary" id="meatButton">Add To Sammie</button>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  printToDom(domString, "meatDiv");
  meatButtonEvent();
};

const addMeat = () => {
  let meatChecks = document.getElementsByClassName("meatCheck");
  for (let i = 0; i < meatChecks.length; i++) {
    if (meatChecks[i].checked) {
      console.log(meatChecks[i].value);
      const selectedMeats = meats.filter(function(meats) {
        return meats.type === meatChecks[i].value;
      });
      console.log(selectedMeats);
      cartBuilder(selectedMeats);
    }
  }
};

export { setMeats, getMeatz, meatsBuilder, addMeat };
