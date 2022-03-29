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

// 4.2.1
const myBirthday = new Date("09 May, 2003")
console.log(myBirthday)

// 4.2.2
console.log("Od wylądowania na księżyc do moich urodziń mineło:")
console.log((((myBirthday - moonLanding)/60)/60)/24 + "days")

// 4.3 Regular expressions

let zipCode = new RegExp("\\d{5}") // pamiętaj ,że zawsze trzeba poprzedzić znaki specjalne \ 
let result = zipCode.exec("Beverly Hills 90210")

console.log(result)
console.log(result.length)

// .match() -> to jest lepsze

zipCode = /\d{5}/

s = "Beverly Hills 90210 was a \'90s TV show set in Los Angeles. "

s += " 91125 is another ZIP code in the Los Angeles area."

console.log(s)

console.log(s.match(zipCode))

console.log(!!s.match(zipCode))

let ifMatch = (s.match(zipCode))
? "Looks like there's at least one ZIP code in the string"
: false

console.log(ifMatch)

zipCode = /\d{5}/g; // g jest od global - czyli wszystkie match'e

console.log(s.match(zipCode))

let splitted = "ant bat cat duck".split(" ");

console.log(splitted)

splitted = "ant    \n bat \t  \n \n \n \t cat  duck".split(" ");

console.log(splitted)

splitted = "ant    \n bat \t  \n \n \n \t cat  duck".split(/\s+/);

// ^ splituje po whitespace'ach

console.log(splitted)

// 4.3.3.1

const extendedZipCode = /\b\d{5}-\d{4}\b/g

s = "Zip code 10118-0110 (the Empire State Building). 555555-5555555"

console.log(s.match(extendedZipCode))

// 4.3.3.2

const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

const newLinesSplit = /\n/

console.log(sonnet.split(newLinesSplit))
console.log(sonnet.split(newLinesSplit).length) // length = 14


// 4.4 Plain objects -> SŁOWNIKI

let user = {};

console.log(user)

// key value pairs

user["firstName"] = "Michael";
user["lastName"] = "Hartl";

console.log(user)

console.log(user["firstName"])
// dot notation
console.log(user.firstName)

console.log(user.dude) // nie da erroru, ale undefined

let otherUser = {firstName: 'Foo', lastName: 'Bar'}

console.log(otherUser["firstName"])
console.log(otherUser.lastName)

// 4.4.1

const newObj = new Object({ firstName: 'Michael', lastName: 'HARRR' })

console.log(newObj)

// 4.5 Application: unique words

// wszystko jest w pliku count.js

// Map object















