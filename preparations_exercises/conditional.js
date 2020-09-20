function getUserInput(infoReqMsg) {
  let rlSync = require('readline-sync');
  let userInput = rlSync.question(infoReqMsg);
  return userInput;
}

function evenOrOdd(userInput) {
  if (!Number.isInteger(userInput)) {
    console.log('Please enter a valid number.');
  } else if (userInput % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
let userInput1 = parseInt(getUserInput('Please enter a number.\n'));
evenOrOdd(userInput1);

// Seeing multiple return statements makes me cringe.
// I'm hoping this recommendation will be adjusted
// later in the course.
function upCaseAtTen(userInput) {
  if (userInput.length > 10) {
    return userInput.toUpperCase();
  } else {
    return userInput;
  }
}
let userInput2 = getUserInput('Please enter a name.\n');
console.log(upCaseAtTen(userInput2));


function numberRange(userInput) {
  if ( (userInput >= 0) && (userInput <= 50) ) {
    console.log(`${userInput} is between 0 and 50.`);
  }
  else if ( (userInput >= 51) && (userInput <= 100) ) {
    console.log(`${userInput} is between 51 and 100.`);
  } 
  else if (userInput > 100){
    console.log(`${userInput} is greater than 100.`);
  }
  else {
    console.log(`${userInput} is less than 0.`);
  }
}
let userInput3 = parseInt(getUserInput('Please enter a number.\n'));
numberRange(userInput3);
