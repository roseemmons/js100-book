// Life Pro Tip: NEVER ask a woman her age.
//                     
//       -------------***
// -----------------*******
//       -------------***
//   The more you know

let rlSync = require('readline-sync');
let age = parseInt(rlSync.question('Cuantos anos tienes tu, mija?\n'));
console.log(`Damn, sis! You\'re ${age} years old?`);

// Loops, I am IN you!
for (let i=10; i <= 40; i+=10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}