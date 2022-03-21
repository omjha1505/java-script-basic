// Declare variable and Constants before using it
//Methods can be placed anywhere
/*
Data Types :
Numbers
String
Boolean
Object
Array
null , undefined , NaN
undefined : default values of uninitalized variables
null      : we can use this to reset/clear something
NaN       : something like 12/'a'
typeof keyword
*/
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createWriteLog(operator, resultBeforeCalculation, calcNumber) {
  const calcDescription = `${resultBeforeCalculation} ${operator}  ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNum;
    mathOperator = "+";
  } else if (calculationType === "SUBSTRACT") {
    currentResult -= enteredNum;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNum;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNum;
    mathOperator = "/";
  }

  createWriteLog(mathOperator, initialResult, enteredNum);
  writeToLog(calculationType, initialResult, enteredNum, currentResult);
}

function add() {
  calculateResult("ADD");
}

function substract() {
  calculateResult("SUBSTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
