//// Methods

// .toLowerCase()

let user = "MiChAEL"
console.log(user.toLocaleLowerCase())

let username = user.toLowerCase()
console.log(`${username}@example.com`)

//  to upper case
console.log(user.toUpperCase())

// .includes() na stringach

let sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.includes("fox")) // true
console.log(sentence.includes("Fox")) // false
console.log(sentence.includes("The", 1)) // false
console.log(sentence.includes("The", 0)) // true
// .includes("str do znalezienia", od którego indeksu w str ma zacząć)

// pierwszy znak w str ma indeks 0 -> offset by 0
console.log(sentence[0])
// tak jak w listach w sumie

// exercise
// 1.

let str = "hoNeY BaDGer"
console.log(str.toLowerCase().includes("honey badger"))

//// String Iterations

console.log(sentence.charAt(0))
console.log(sentence.charAt(1))
console.log(sentence.charAt(2))

// looping

// for (let i = 0; i < sentence.length; i++ ) {
//   console.log(sentence.charAt(i))
// }

// zad 1

// let N = sentence.length
// for (let i = 0; i < N; i++) {
//   console.log(sentence.charAt(i))
// }

// zad 2

for (let i = 0; sentence.length > i; i++) {
  console.log(sentence[i])
}







