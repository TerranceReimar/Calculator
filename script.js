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
  if (userInput.lenght !== 0) {
    userInput.pop();
    displayUser.textContent = userInput.join("");
  }
});

const inputNumber = (num) => {
  if (displayUser.textContent !== result) {
    userInput.push(num);
    displayUser.textContent = userInput.join("");
  }
};

const one = document.querySelector("#one");
one.addEventListener("click", () => inputNumber(1));

const two = document.querySelector("#two");
two.addEventListener("click", () => inputNumber(2));

const three = document.querySelector("#three");
three.addEventListener("click", () => inputNumber(3));

const four = document.querySelector("#four");
four.addEventListener("click", () => inputNumber(4));

const five = document.querySelector("#five");
five.addEventListener("click", () => inputNumber(5));

const six = document.querySelector("#six");
six.addEventListener("click", () => inputNumber(6));

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => inputNumber(7));

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => inputNumber(8));

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => inputNumber(9));

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => inputNumber(0));

const mult = document.querySelector("#mult");
mult.addEventListener("click", () => {
  if (formula.length == 0) {
    userInput = userInput.join("");
    formula.push(userInput);
    userInput = [];
    displayUser.textContent = userInput;
    displayFormula.textContent = `${formula} x`;
  } else {
    if (formula.length > 0 && userInput.length > 0) {
      userInput = userInput.join("");
      result = multiply(formula[0], userInput);
      formula = [];
      formula.push(result);
      formula.push(userInput);
      userInput = [];
      displayFormula.textContent = `${formula[0]} x`;
      displayUser.textContent = "";
    }
  }
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
  if (formula.length == 0) {
    userInput = userInput.join("");
    formula.push(userInput);
    userInput = [];
    displayUser.textContent = userInput;
    displayFormula.textContent = `${formula} +`;
  } else {
    if (formula.length > 0 && userInput.length > 0) {
      userInput = userInput.join("");
      result = addition(formula[0], userInput);
      formula = [];
      formula.push(result);
      formula.push(userInput);
      userInput = [];
      displayFormula.textContent = `${formula[0]} +`;
      displayUser.textContent = "";
    }
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
  if (formula.length !== 0 && userInput !== undefined) {
    if (displayFormula.textContent.indexOf("x") != -1) {
      userInput = userInput.join("");
      formula.push(userInput);
      userInput = [];
      result = multiply(formula[0], formula[1]);
      displayUser.textContent = result;
      displayFormula.textContent = `${formula[0]} x ${formula[1]}`;
    }
    if (displayFormula.textContent.indexOf("/") !== -1) {
    }
    if (displayFormula.textContent.indexOf("+") !== -1) {
    }
    if (displayFormula.textContent.indexOf("-") !== -1) {
    }
  }
});

let multiply = (num1, num2) => {
  return (num1 *= num2);
};

let devide = (num1, num2) => {
  return (num1 /= num2);
};

let addition = (num1, num2) => {
  return parseInt(num1) += parseInt(num2);
};

let subtract = (num1, num2) => {
  return num1 - num2;
};
