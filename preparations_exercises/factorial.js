function factorialVer1(userInput) {
  let product = 1;
  let num = parseInt(userInput);
  // If the user's input is 2 or above, factoralize.
  if (num > 1) {
    for (let i = 0; i < num; i += 1) {
      product *= (num - i);
    }    
  }
  // Otherwise, just return 1 since 0! and 1!
  // return 1 anyway.
  return product;
}
console.log(factorialVer1(5));



function factorialVer2(userInput) {
  let product = 1;
  let num = parseInt(userInput);
  // If the user's input is 2 or above, factoralize.
  if (num > 1) {
    product = num * factorialVer2(num - 1);
  }
  // Otherwise, just return 1 since 0! and 1!
  // return 1 anyway.
  return product;
}
console.log(factorialVer2(0));