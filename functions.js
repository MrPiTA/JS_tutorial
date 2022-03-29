'use strict';

// function name(arg) {
//   // code
// }

// is the same as

// let name = (arg) => {
//   // code
// }

// Chapter 5 Functions

function stringMessage(string) {
  return (string) ? "The string is nonempty!" : "It's an empty string!";
}

console.log(stringMessage(""));
console.log(stringMessage("ACSDCS"));

// Sorting an array numerically 

let a = [8, 17, 42, 99];

console.log(a.sort())

function numberCompare(a, b) {
  return (a > b) ? 1: (a < b) ? -1: 0 
}

console.log(numberCompare(1,2))
console.log(numberCompare(2,1))
console.log(numberCompare(2,2))

console.log(a.sort(numberCompare))

let a2 = [1,5,3,6,4]

console.log(a2.sort(numberCompare))

// powinno się to robić używając anonymous function

// inny sposób ,aby zdefiniować funkcję "FAT ARROW"

let altStringMessage = (string) => {
  return (string) ? "The string is nonempty!" : "It's an empty string!";
}

console.log(altStringMessage("Honey"))
console.log(altStringMessage(""))

// różnica pomiędzy funkcją a metodą, jest taka ,że
// metoda to funkcja dołączona do jakiegoś obiektu


// 5.4.3.1

function square(num) {
  return Math.pow(num, 2)
}

console.log(square(2))
console.log(square(4))
console.log(square(0))

let altSquare = (num) => {
  return Math.pow(num, 2)
}

console.log(altSquare(2))
console.log(altSquare(4))
console.log(altSquare(0))


// 5.2 Functions in a file

// everything in index.html and day.js (a file for functions)

// 5.3 Method chaining






