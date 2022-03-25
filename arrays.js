"use strict";
// CHAPTER 3

// 3.1 Spliting
let sentence = "abc def ghi"
let a1 = sentence.split(" ")

console.log(a1)

let sentence2 = "abc,def,ghi"
let a2 = sentence2.split(",")

console.log(a2)

let sentence3 = "vansire"
let a3 = sentence3.split("")

console.log(a3)

// 3.1.1 i 3.1.2

let a = "A man, a plan, a canal, Panama"
console.log(a.split(", ").reverse())

// 3.2 Array access

a = "badger".split("");
console.log(a[0])
console.log(a[1])
console.log(a[3])

a = [2, true, null, "hi"]

console.log(a[4]) // nie error index out of range, ale tylko undefined !nawet jak jest use strict

// 3.2.1

// a = "honey badger".split("")

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i])
// }

// 3.2.2
// FALSE
console.log(!!undefined)

// 3.3 Array slicing

a = [42, 8, 17, 99]

// slice(pierwszy element, ostatni element,ale on nie jest uwzględniany)
console.log(a.slice(1));
console.log(a.slice(1, 3));
console.log(a.slice(0, -1));
console.log(a.slice(-1));
// console.log(a.slice(-1, 0)); nie działa

console.log(a[-1]) // WTF!? Nie zwraca ostatniego, ale undefined

// aby zwrócić ostatni element trzeba

console.log(a.slice(-1)[0])

// 3.3.1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.slice(2, 8))
console.log(arr.slice(2, -2))

// 3.3.2

let aString = "ant bat cat"

console.log(aString.slice(4, 7))

// 3.4 More array methods

// .includes()

console.log(a.includes(42))

// .sort() 
//! zawsze sortuje w porządku leksykalnym 

console.log(a)
a.sort() // zmienia a
console.log(a)

// ! .sort() zawsze sortuje w porządku leksykalnym, nawet numeryczne wartości

// .reverse()

console.log(a)
a.reverse() // zmienia a
console.log(a)

// appending element to array -> .push()

console.log(a)
a.push(23)
console.log(a)

// removing last element from array -> .pop
// zwraca ten element

console.log(a)
let popped = a.pop()
console.log(a)
console.log(popped)

// nie działa wpisywanie indeksów :c -> zawsze usuwa ostatni
// let theAnswerToLifeTheUniverse = a.pop(0)
// console.log(theAnswerToLifeTheUniverse)

// .join() - undoing a split -> z elementów listy na string

console.log(["a", "b", "c", 42].join()) // defultowo jest z przecinkiem
console.log(["a", "b", "c", 42].join("--"))
console.log(["a", "b", "c", 42].join("->"))
console.log(["a", "b", "c", 42].join(""))

// 3.4.4.1

a = ["ant", "bat", "cat", 42]
console.log(a.join(" ").split(" "))
// ternary operator z dzisiejszych ćwiczeń :)
console.log((a == a.join(" ").split(" ")) ? true : false)

// 3.4.4.2

// .unshift() -> dodaje na początek arraya

a.unshift("Chain")

console.log(a)

// .shift() -> taki pop ale usuwa z początku arraya i zwraca tą wartość

let shifted = a.shift()
console.log(shifted)
console.log(a)


// 3.5 Array iteration 

for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}

// 3.5.2

let total = "";
for (let i = 0; i < a.length; i++) {
    total += a[i]
  }

console.log(total)

console.log((total == a.join("")) ? true: false)




