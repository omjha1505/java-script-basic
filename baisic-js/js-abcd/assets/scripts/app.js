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

function add() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNum;
  createWriteLog("+", initialResult, enteredNum);
  writeToLog("ADD", initialResult, enteredNum, currentResult);
}

function substract() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNum;
  createWriteLog("-", initialResult, enteredNum);
  writeToLog("SUBSTRACT", initialResult, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  createWriteLog("*", initialResult, enteredNum);
  writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;
  createWriteLog("/", initialResult, enteredNum);
  writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
