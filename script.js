const screen = document.querySelector(".screen");
let displayFormula = document.createElement("div");
let displayUser = document.createElement("div");
displayFormula.classList.add("displayFormula");
displayUser.classList.add("displayUser");
screen.appendChild(displayFormula);
screen.appendChild(displayUser);

let userInput = [];
let formula = [];
let result;

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  userInput = [];
  formula = [];
  result = null;
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

const mult = document.querySelector("#mult");
mult.addEventListener("click", () => {
  if (userInput.length !== 0) {
    userInput = userInput.join("");
    formula.push(userInput, "*");
    userInput = [];
    displayFormula.textContent = formula.join(" ");
    displayUser.textContent = userInput;
  }
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
  if (userInput !== 0) {
    userInput = userInput.join("");
    formula.push(userInput, "+");
    userInput = [];
    displayFormula.textContent = formula.join(" ");
    displayUser.textContent = userInput;
  }
});

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
  if (userInput !== 0) {
    userInput = userInput.join("");
    formula.push(userInput, "-");
    userInput = [];
    displayFormula.textContent = formula.join(" ");
    displayUser.textContent = userInput;
  }
});

const divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
  if (userInput !== 0) {
    userInput = userInput.join("");
    formula.push(userInput, "/");
    userInput = [];
    displayFormula.textContent = formula.join(" ");
    displayUser.textContent = userInput;
  }
});

const comma = document.querySelector("#comma");
comma.addEventListener("click", () => {
  if (userInput !== 0) {
    userInput.push(".");
    displayUser.textContent = userInput.join("");
  }
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  if (userInput !== 0) {
    userInput = userInput.join("");
    formula.push(userInput);
    userInput = [];
    formula = formula.join(" ");
    result = eval(formula);
    displayFormula.textContent = formula;
    displayUser.textContent = result;
  }
});
