const screen = document.querySelector(".screen");
let displayFormula = document.createElement("div");
let displayUser = document.createElement("div");
displayFormula.classList.add("displayFormula");
displayUser.classList.add("displayUser");
screen.appendChild(displayFormula);
screen.appendChild(displayUser);

let userInput = [];
let formula = [];

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  userInput = [];
  formula = [];
  displayFormula.textContent = "";
  displayUser.textContent = "";
});

const del = document.querySelector("#delete");
del.addEventListener("click", () => {
  userInput.pop();
  displayUser.textContent = userInput.join("");
});

const one = document.querySelector("#one");
one.addEventListener("click", () => {
  userInput.push("1");
  displayUser.textContent = userInput.join("");
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
  userInput.push(2);
  displayUser.textContent = userInput.join("");
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
  userInput.push(3);
  displayUser.textContent = userInput.join("");
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
  userInput.push(4);
  displayUser.textContent = userInput.join("");
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
  userInput.push(5);
  displayUser.textContent = userInput.join("");
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
  userInput.push(6);
  displayUser.textContent = userInput.join("");
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  userInput.push(7);
  displayUser.textContent = userInput.join("");
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  userInput.push(8);
  displayUser.textContent = userInput.join("");
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  userInput.push(9);
  displayUser.textContent = userInput.join("");
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  userInput.push(0);
  displayUser.textContent = userInput.join("");
});
