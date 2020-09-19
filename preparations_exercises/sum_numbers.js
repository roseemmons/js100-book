let rlSync = require('readline-sync');

// I'm old school; I use parseInt, float, etc.
let num1 = parseInt(rlSync.question('Enter the first number\n'));
let num2 = parseInt(rlSync.question('Enter the second number\n'));
let sum = num1 + num2;

console.log(`The numbers ${num1} and ${num2} add to ${sum}.`);