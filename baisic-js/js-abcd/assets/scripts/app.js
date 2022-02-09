// Declare variable and Constants before using it
//Methods can be placed anywhere

const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

outputResult(currentResult, calculationDescription);
