import { cartToDom, printToDom } from "../helpers/util.js";

let total = 0;

const cartBuilder = newArray => {
  let newString = "";
  for (let i = 0; i < newArray.length; i++) {
    newString += `<div class="row h-100 justify-content-center align-items-center">`;
    newString += `<div class="col-md-4">`;
    newString += `<div class="card" style="width: 18rem;">`;
    newString += `<div class="card-body">`;
    newString += `<p class="list-group-item">${newArray[i].type}:       $${
      newArray[i].price
    }</p>`;
    newString += `</div>`;
    newString += `<div>`;
    newString += `</div>`;
    newString += `</div>`;
    total += newArray[i].price;
  }
  cartToDom(newString, "cartDiv");
  printToDom(`Total: $${total}`, "cartTotal");
};

export { cartBuilder };
