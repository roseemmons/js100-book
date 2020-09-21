let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

// While Loop
// while(index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }

// For Loop
for (let i=0; i < names.length; i += 1) {
  if (names[i] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[i].toUpperCase();
  upperNames.push(upperCaseName);
}


console.log(upperNames);