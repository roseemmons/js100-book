// Exercises #2 and #4
// I used .map() for both. Oops.
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
let mappedArray = myArray.map(function(el) {
  let result = null;
  if (el % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  return result;
});
console.log(mappedArray);


// Exercise #3
// I used .flat() + .filter(). The book's
// answer is nowhere near mine, but the 
// result is the same, so I'll take it.
let nestedArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
nestedArray.flat().filter(function(el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});


// Exercise #5
// Created a wrapper? Not sure.
function removeNonInteger(arr) {
  return arr.filter(Number.isInteger);
}
let arr1 = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArr = removeNonInteger(arr1);
console.log(newArr); // => [1, 3, -4]
 

// Exercise #6
// My answer is backwards from the book.
// I filtered, then mapped. Seemed to make
// more sense to me. Same result too.
function oddLengths(arr) {
  return arr.filter(function(word) {
    if (word.length % 2 !== 0) {
      return word;
    }
  }).map(function(filteredWord) {
    return filteredWord.length;
  });
}
let arr2 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr2)); // => [1, 5, 3]


// Exercise #7
function sumOfSquares(arr) {
  return arr.reduce(function(acc, curVal) {
    return acc + (curVal * curVal);
  }, 0);
}
let arr3 = [3, 5, 7];
console.log(sumOfSquares(arr3)); // => 83


// Exercise #8
// Copy of exercise #6, but without .filter()
// or .map(). My answer is a smidge different
// from the book. Same result though.
function oddLengthsReduce(arr) {
  arr.reduce(function(acc, curVal) {
    if (curVal.length % 2 !== 0) {
      let filteredWord = curVal.length;
      acc.push(filteredWord);
    }
    return acc;
  }, []);
}
let arr4 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr4)); // => [1, 5, 3]

// Exercise #9
// Find the number 3 without using loops.
// Like Joe Kelly, that's easy!
// Just use includes().
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));


// Exercise #10
// Totally overengineered this one.
// I need a life.
function searchNestedArray(arr, searchVal) {
  // First we run the search...
  let result = arr.flat().find(function(el) {
    if (el === searchVal) {
      return el;
    }
  });

  // Now, let's fail gracefully.
  if (result === undefined) {
    return 'Apologies! Your search value was not found.';
  } else {
    // Otherwise, return the result.
    return result;
  }
}
let arr5 = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
console.log(searchNestedArray(arr5, "mem"));
// Good night, everybody!