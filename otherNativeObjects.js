'use strict';
// Chapter 4

// 4.1 Math and Number

console.log(1 + 1)
console.log(2 - 1)
console.log(1 * 3)
console.log(10/5)
console.log(10/3)

console.log(Math.PI)
console.log(Math.pow(2,3))

console.log(2**3) // dodali :)

console.log(Math.sqrt(4))

console.log(Math.cos(2*Math.PI))

// defultowo logarytmy są naturalne

console.log(Math.E)
console.log(Math.log(Math.E))

console.log(Math.log10(10))

let tau = 2 * Math.PI
console.log(tau)

// Converting to string

tau = tau.toString()
console.log(typeof(tau))

// console.log(100.toString()); błąd bo musi być kropka -> 100.0

// String()

console.log(typeof(String(100)))

// Number()

console.log(typeof(Number("100")))

// Matematyke lepiej nie robić w JS tylko użyć pythona

// 4.2 Dates

let s = new String("A man, a plan, a canal---Panama!")
console.log(s)

console.log((s === "A man, a plan, a canal---Panama!") ? true : false) // false 0.0
console.log((s == "A man, a plan, a canal---Panama!") ? true : false) // false 0.0

console.log(s.split(", "))

let a = new Array();
console.log(a)
console.log((a === []) ? true : false) // false
console.log((a == []) ? true : false) // false

a.push(3)
a.push("hello")
a.pop()
console.log(a)

// Date -> nie ma literall constructor, trzeba używać new Date()

let now = new Date();

console.log(now)

let moonLanding = new Date("July 20, 1969 20:18");

console.log(moonLanding)

// calculating diffrence between dates

console.log(now - moonLanding)

// .getFullYear()
console.log(now.getFullYear())

// .getMonth() i .getDay() -> zwracają indeks w tablicy miesięcy/dni
// jest to offset by 0

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

console.log(now.getDay())
console.log("Today is", days[now.getDay()])









