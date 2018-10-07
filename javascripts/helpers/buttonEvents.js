import { cartBuilder } from "../components/cartComponent.js";
import { addBread } from "../components/breadComponent.js";


const breadButtonEvent = (chosenBreads) => {
    const breadButton = document.getElementById("breadButton");
    breadButton.addEventListener("click", () => {
        console.log('i clicked breads!');
        addBread();
    });
};

const cheeseButtonEvent = () => {
    const cheeseButton = document.getElementById("cheeseButton");
    cheeseButton.addEventListener("click", () => {
        console.log('I clicked cheese')
    });
};

const condimentButtonEvent = () => {
  condimentButton.addEventListener("click", () => {
  console.log("i clicked condiments")
});
};


const meatButtonEvent = () => {
  meatButton.addEventListener("click", () => {
      console.log('i clicked meat!')
  });
};

const veggieButtonEvent = () => {
  veggieButton.addEventListener("click", () => {
      console.log('i clicked veggie!')
  });
};

export { breadButtonEvent, cheeseButtonEvent, condimentButtonEvent, meatButtonEvent, veggieButtonEvent };