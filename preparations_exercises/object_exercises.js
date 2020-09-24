// Exercises 1 and 2 had no code, just yes/no questions
// Exercise #3
// Mimic an array with an object
let myArray = {
  '0': 'yakko',
  '1': 'wacko',
  '2': 'dot',
  'length': 3
};
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Exercise #4
// Create a new array from the keys of the object obj
// below, with all of the keys converted to uppercase.
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let keysArr = Object.keys(obj).map(function(key) {
  return key.toUpperCase();
});
console.log(obj);
console.log(keysArr);

// Exercise #5
// Create a new object named myObj that uses myProtoObj
// as its prototype.
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);

// Exercise 7
// Create a function that creates and returns a copy of
// an object. 
function copyObj(obj, arr) {
  let result = {};
  // Short circuit if we're just returning a copy
  if (arr === undefined) {
    Object.assign(result, obj);
  } else {
    // Otherwise, go ahead and iterate
    arr.forEach(function(key) {
      result[key] = obj[key];
    });
  }
  return result;
}
let objToCopy = {
  foo: 1,
  bar: 2,
};
let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined