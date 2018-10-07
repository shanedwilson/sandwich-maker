import { addBread } from "../components/breadComponent.js";
import { addMeat } from "../components/meatComponent.js";
import { addCheese } from "../components/cheeseComponent.js";
import { addCondiment } from "../components/condimentComponent.js";
import { addVeggie } from "../components/veggieComponent.js";




const breadButtonEvent = () => {
    const breadButton = document.getElementById("breadButton");
    breadButton.addEventListener("click", () => {
        addBread();
    });
};

const cheeseButtonEvent = () => {
    const cheeseButton = document.getElementById("cheeseButton");
    cheeseButton.addEventListener("click", () => {
        addCheese();
    });
};

const condimentButtonEvent = () => {
    const condimentButton = document.getElementById("condimentButton");
  condimentButton.addEventListener("click", () => {
        addCondiment();
});
};


const meatButtonEvent = () => {
  meatButton.addEventListener("click", () => {
      addMeat();
  });
};

const veggieButtonEvent = () => {
  veggieButton.addEventListener("click", () => {
      addVeggie();
  });
};

export { breadButtonEvent, cheeseButtonEvent, condimentButtonEvent, meatButtonEvent, veggieButtonEvent };