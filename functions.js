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

let a = [8, 177, 42, 99];

console.log(a.sort());

function numberCompare(a, b) {
  return (a > b) ? 1: (a < b) ? -1: 0;
}

console.log(numberCompare(1,2));
console.log(numberCompare(2,1));
console.log(numberCompare(2,2));

console.log(a.sort(numberCompare));

let a2 = [1,5,3,6,4];

console.log(a2.sort(numberCompare));

// powinno się to robić używając anonymous function

// inny sposób ,aby zdefiniować funkcję "FAT ARROW"

let altStringMessage = (string) => {
  return (string) ? "The string is nonempty!" : "It's an empty string!";
};

console.log(altStringMessage("Honey"));
console.log(altStringMessage(""));

// różnica pomiędzy funkcją a metodą, jest taka ,że
// metoda to funkcja dołączona do jakiegoś obiektu


// 5.4.3.1

function square(num) {
  return Math.pow(num, 2)
}

console.log(square(2));
console.log(square(4));
console.log(square(0));

let altSquare = (num) => {
  return Math.pow(num, 2)
};

console.log(altSquare(2));
console.log(altSquare(4));
console.log(altSquare(0));


// 5.2 Functions in a file

// everything in index.html and day.js (a file for functions)

// 5.3 Method chaining

// ! jak chcesz z stringa zrobić arraya to zamiast split("") lepiej zrób 
// Array.from(string)


//// Array.from() jest super !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Reverses a string.
const reverseString = (string) => {
  return Array.from(string).reverse().join("");
};

// Returns true if string is a palindrom, if not it returns false.
const palindromeCheck = (string) => {
  let processed = string.toLowerCase()
  return processed === reverseString(processed);
};

console.log(palindromeCheck("racecar"));
console.log(palindromeCheck("Racecar"));

// 5.3.2 E
//  5.3.2.1

function emailParts(email) {
  return email.toLowerCase().split("@");
}

console.log(emailParts("example@rails.org"));
console.log(emailParts("EXAMPLE@RAILS.ORG"));

//// 5.4 Iteration for each

let arr = [42, 17, 85];

arr.forEach(function(element) {
  console.log(element);
});

arr.forEach(element => {
  console.log(element)
});

// iterating through charaters in string using ForEach
// na początku musisz przekonwertować na tablicę

let soliloquy = "To be or not to be"

soliloquy.split("").forEach(char => console.log(char));

// lub

Array.from(soliloquy).forEach(char => console.log(char));

// BONUS // BONUS // BONUS //
//// SORTING AN ARRAY USING ANONYMOUS FUNCTION

let a3 = [81, 17, 42, 99];

console.log(a3.sort((a, b) => {
  return (a > b) ? 1: (a < b) ? -1: 0;
}));

// better way

console.log(a3.sort((a, b) => a - b)); // 1 linijka ez


// anonymous function to taka tmp funkcja, która jest tworzona on the fly
// i jest taka tymczasowa, że nie dajemy jej nawet nazwy

//// 5.4.1 E
// 5.4.1.1
// fat arrow stosuje regularnie, więc zrobiłem rewrite na function

let aE = ["ant", "bat", "cat", 42];

console.log(aE.forEach(function(item) {console.log(item);}));






