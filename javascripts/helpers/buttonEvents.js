import { cartBuilder } from "../components/cartComponent.js";

// const condimentButton = document.getElementById("condimentButton");
// const meatButton = document.getElementById("meatButton");
// const veggieButton = document.getElementById("veggieButton");

// const addNumberCaller = e => {
//   addNumber(e.target.innerHTML);
// };

const breadButtonEvent = () => {
    const breadButton = document.getElementById("breadButton");
    breadButton.addEventListener("click", cartBuilder);
};

const cheeseButtonEvent = () => {
    const cheeseButton = document.getElementById("cheeseButton");
    cheeseButton.addEventListener("click", cartBuilder);
};

// const condimentButtonEvent = () => {
//   condimentButton.addEventListener("click", addNumberCaller);
// };


// const meatButtonEvent = () => {
//   meatButton.addEventListener("click", addNumberCaller);
// };

// const veggieButtonEvent = () => {
//   veggieButton.addEventListener("click", addNumberCaller);
// };

const attachEvents = () => {
  breadButtonEvent();
  cheeseButtonEvent();
//   condimentButtonEvent();
//   meatButtonEvent();
//   veggieButtonEvent();
};

export { attachEvents };