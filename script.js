const screen = document.querySelector(".screen");

// OUTPUT FORMULA ON SCREEN ELEMENT //
const displayFormula = document.createElement("div");
displayFormula.classList.add("displayFormula");

// OUTPUT CURRENT INPUT ON SCREEN ELEMENT //
const displayIO = document.createElement("div");
displayIO.classList.add("displayIO");

screen.appendChild(displayFormula);
screen.appendChild(displayIO);

let userInput;
let formula = [];

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  userInput = undefined;
  formula = undefined;
  displayIO.textContent = "";
});

const del = document.querySelector("#delete");
del.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.pop();
    userInput = userInput.join("");
  }
  displayIO.textContent = userInput;
});

const one = document.querySelector("#one");
one.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("1");
    userInput = userInput.join("");
  } else {
    userInput = "1";
  }
  displayIO.textContent = userInput;
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("2");
    userInput = userInput.join("");
  } else {
    userInput = "2";
  }
  displayIO.textContent = userInput;
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("3");
    userInput = userInput.join("");
  } else {
    userInput = "3";
  }
  displayIO.textContent = userInput;
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("4");
    userInput = userInput.join("");
  } else {
    userInput = "4";
  }
  displayIO.textContent = userInput;
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("5");
    userInput = userInput.join("");
  } else {
    userInput = "5";
  }
  displayIO.textContent = userInput;
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("6");
    userInput = userInput.join("");
  } else {
    userInput = "6";
  }
  displayIO.textContent = userInput;
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("7");
    userInput = userInput.join("");
  } else {
    userInput = "7";
  }
  displayIO.textContent = userInput;
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("8");
    userInput = userInput.join("");
  } else {
    userInput = "8";
  }
  displayIO.textContent = userInput;
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("9");
    userInput = userInput.join("");
  } else {
    userInput = "9";
  }
  displayIO.textContent = userInput;
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  if (userInput !== undefined) {
    userInput = Array.from(userInput);
    userInput.push("0");
    userInput = userInput.join("");
  } else {
    userInput = "0";
  }
  displayIO.textContent = userInput;
});

const times = document.querySelector("#times");
times.addEventListener("click", () => {
  if (formula.length < 1 && userInput !== undefined) {
    formula.push(userInput);
    displayFormula.textContent = `${formula[0]} x`;
    userInput = 0;
    displayIO.textContent = "";
  } else if (formula.length >= 1 && userInput !== undefined) {
    for (let i = 0; i < formula.length; i++) {}
  }
});
