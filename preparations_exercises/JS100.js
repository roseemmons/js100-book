let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i].length);
}

let counter = 1;
while (counter <= 40) {
  if (counter % 2 !== 0) {
    console.log(counter);
  }
  counter += 1;
}

let weather = 'otherwise';
switch (weather) {
    case 'sunny':
        console.log("It's a beautiful day!");
        break;
    case 'rainy':
        console.log("Grab your umbrella.");
        break;
    default:
        console.log("Let's stay inside.");
}

function cite(arg1, arg2) {
  console.log(`${arg1} said: "${arg2}."`);
}

function squaredNumber(n) {
  return n * n;
}

function compareByLength(str1, str2) {
  let result = null;
  if (str1.length < str2.length) {
    result = -1;
  } else if (str1.length > str2.length) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
}

function localGreet (locale) {
  const slicedLocale = locale.slice(locale.indexOf('_') + 1, locale.indexOf('.'));
  const slicedLang = locale.slice(0, locale.indexOf('_'));

  if (slicedLang === 'en') {
    switch (slicedLocale) {
      case 'US': return 'Hi!';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
    }
  } else {
    switch (slicedLang) {
      case 'fr': return "Salut!";
      case 'pt': return "Ola!";
      case 'de': return "Hallo!";
      case 'sv': return "Hej!";
      case 'af': return "Haai!";
      default: return "Language unknown";
    }
  }
}

function myRepeat(num, str) {
  let result = null;
  for (let i = num; i > 0; i -= 1) {
    result += str;
  }
  return result;
}

function isBlank(str) {
  return str.trim().length === 0;
}

let userString = 'launch school tech & talk';
function capitalizeWords(str) {
  let strArray = str.split(" ");

  let capStrArray = strArray.map(function(val) {
    return val[0].toUpperCase() + val.slice(1);
  });

  return capStrArray.join(" ");
}
capitalizeWords(userString);


function first(ary) {
  return ary[0];
}

function last(ary) {
  let lastIndex = ary.length -1;
  return ary[lastIndex];
}

let scores = [96, 47, 113, 89, 100, 102];
let total = 0;
scores.filter(function(val) {
  if (val >= 100) {
    total += 1;
  }
});

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
vocabulary.flat().forEach(function(val) {
  console.log(val);
});


let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(arg) {
  let result = false;
  destinations.forEach(function(val) {
    if (val === arg) {
      result = true;
    }
  });
  return result;
}
contains('Palm Desert');
contains('London');
contains('Las Vegas');
contains('Paris');


let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
while (groceryList.length > 0;) {
  let result = groceryList.shift();
  console.log(result);
}


let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift()
energy.push('geothermal');


function greet(greeting = 'Hello', recp = 'world') {
  console.log(`${greeting}, ${recp}!`);
}

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet2() {
  console.log(`${greeting()}, ${recipient()}!`);
}

function calculateBMI(heightCM, weightKG) {
  return (weightKG / ((heightCM/100) ** 2)).toFixed(2);
}


// This function returns human ages in cat years.
// The first year is +15, second +9, and all others
// are +4 years.
function catAge(num) {
  let result = 0;
  while (num > 0) {
    if (num === 1) {
      result += 15;
    } else if (num === 2) {
      result += 9;
    } else {
      result += 4;
    }
    num -= 1;
  }
  // if 0, return 0 immediately
  return result;
}

function removeLastChar(str) {
  return str.slice(0, -1);
}

const template = 'I VERB NOUN.';
const sentence = (verb, noun) => {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
};
console.log(sentence('like', 'birds'));


let initGame = () => ({ 'level': 1, 'score': 0 });

// Write the code necessary to retrieve the value of the courses property of our
// student object.
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};
student.courses

// Given the below object jane, write code that retrieves the country in which
// Jane is located.
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};
jane.location.country


// Add property 'age'.
// Add property 'favorite food'.
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};
fido.age = 1;
fido['favorite food'] = 'steak'

// Add a property to the below object, jane, so that the code on line 13 logs
// 'Hej, Bobby!' to the console.
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  }
};
jane.greet('Bobby'); // Hej, Bobby!


// Write code that stores all of the vehicle property names in an array
// called keys.
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
let keys = Object.getOwnPropertyNames(vehicle);
let keys = Object.keys(vehicle);

// Convert the person object into a nested array nestedPerson, containing the
// same key-value pairs. xpected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};
Object.entries(person);



// Write a function clone that takes an object as argument and returns a
// shallow copy of that argument.
function clone(obj) {
  // TODO
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33