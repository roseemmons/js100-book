function getUserInput(infoReqMsg) {
  let rlSync = require('readline-sync');
  let userInput = rlSync.question(infoReqMsg);
  return userInput;
}

function letsMultuply(num1, num2) {
  return num1 * num2;
}

let num1 = parseFloat(getUserInput('Enter a number\n'));
let num2 = parseFloat(getUserInput('Enter another number\n'));
let sum = letsMultuply(num1, num2);
console.log(`${num1} * ${num2} = ${sum}`);