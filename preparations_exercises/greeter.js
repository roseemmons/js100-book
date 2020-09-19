let rlSync = require('readline-sync');
let fName = rlSync.question('What\'s your first name?\n');
let lName = rlSync.question('Yeah? What\'s your last name?\n');
console.log(`Sup, ${fName} ${lName}.`);