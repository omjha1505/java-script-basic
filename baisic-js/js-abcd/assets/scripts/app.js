// Declare variable and Constants before using it
//Methods can be placed anywhere
/*
Data Types :
Numbers
String
Boolean
*/
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createWriteLog(operator, resultBeforeCalculation, calcNumber) {
  const calcDescription = `${resultBeforeCalculation} ${operator}  ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNum;
  createWriteLog("+", initialResult, enteredNum);
}

function substract() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNum;
  createWriteLog("-", initialResult, enteredNum);
}

function multiply() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  createWriteLog("*", initialResult, enteredNum);
}

function divide() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;
  createWriteLog("/", initialResult, enteredNum);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
