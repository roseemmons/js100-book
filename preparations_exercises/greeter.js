function greetPeople(greetingMsg) {
  console.log(greetingMsg);
}
greetPeople('Good morning!');

function getUserInput(infoReqMsg) {
  let rlSync = require('readline-sync');
  let userInput = rlSync.question(infoReqMsg);
  return userInput;
}
let fName = getUserInput('What is your first name?\n');
let lName = getUserInput('What is your last name?\n');
console.log(`Hi, ${fName} ${lName}.`);