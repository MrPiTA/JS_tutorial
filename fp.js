
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Kansas -> kansas
// North Dakota -> north-dakota

// urls: Imperative version

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(element => {
    urls.push(element.toLowerCase().split(/\s+/).join("-"))
  });
  return urls
}

console.log(imperativeUrls(states));

// wstęp do mapa
squares = [1, 2 ,3 ,4].map(function (n) {return n*n;});
console.log(squares)

squares2 = [1, 2, 3, 4].map(n => n*n);
console.log(squares2)

// urls: Functional version

function functionalUrls(elements) {
  return elements.map(n => n.toLowerCase().split(/\s+/).join("-"))
}

console.log(functionalUrls(states))

// Returns a URL-friendly version of a string.
//    Example: "North Dakota" -> "north dakota"

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-")
}

// urls: Better Imperative version

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(element => {
    urls.push(urlify(element))
  });
  return urls
}

console.log(imperativeUrls(states));

// urls: Better Functional version

function bfunctionalUrls(elements) {
  return elements.map(n => urlify(n))
}

console.log(functionalUrls(states))

// 6.1.1 E
// 6.1.1.1 

function stateToUrl(states) {
  return states.map(n => `https://example.com/${urlify(n)}.`)
}

console.log(stateToUrl(states))

//// 6.2 FILTER

// We want an array that contains only single word states

// Singles: Imperative

function imperativeSingles(states) {
  let singles = []
  states.forEach(element => {
      if (element.split(/\s+/).length === 1) singles.push(element)
    });
  return singles
}

console.log(imperativeSingles(states))

// FILTER 

let even = [1, 2, 3, 4, 5, 6, 7, 8].filter(n => n % 2 === 0);
console.log(even);

// Singles: Functional

function functionalSingles(states) {
  return states.filter(n => n.split(/\s+/).length == 1);
}
console.log(functionalSingles(states))

//// 6.2.1 E
// 6.2.1.1

function includesDakota(states) {
  return states.filter(n => n.includes("Dakota"));
};

console.log(includesDakota(states))

function twoWordsStates(states) {
  return states.filter(n => n.split(/\s+/).length === 2);
}

console.log("works")
console.log(twoWordsStates(states));

///// 6.3 Reduce

// sum all numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10];

// imperative

function imperativeSum(numbers, total = 0) {
  numbers.forEach(number => {
    total += number;  
  });
  return total;
}

console.log(imperativeSum(numbers))

// functional 

// function functionalSum(numbers) {
//   return numbers.reduce((total, n) => total += n, 0)
// }

function functionalSum(numbers) {
  return numbers.reduce((total, n) => total += n) // defultowa wartość acc = 0
}

console.log(functionalSum(numbers))

// z array'a stringów stwórz słownik, gdzie kluczem są te stringi, a wartościami są ich długości

// lenghts

// imperative

function imperativeLengths(elements) {
  let lenghts = new Object();
  elements.forEach(element => {
        lenghts[element] = element.length;
  });
  return lenghts;
}

console.log(imperativeLengths(states));


// functional

console.log("Functional");

// tak nie działa

// function functionalMakeObject(elements) {
//   return elements.reduce((statesObj, n) => statesObj[n] = n.length, {});
// }

// a tak działa 

function functionalMakeObject(elements) {
  return elements.reduce((lenghts, n) => {
    lenghts[n] = n.length;
    return lenghts;
  }, {});
}

console.log(functionalMakeObject(states));




