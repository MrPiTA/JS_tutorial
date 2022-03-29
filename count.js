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

let uniques = {};

let words = sonnet.match(/\w+/g);

console.log(words);

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  (uniques[word]) ? uniques[word] += 1: uniques[word] = 1; // jak nie będzie key to zwróci undefined a undefined to false
}

console.log(uniques)

// Map object
// W tym przypadku lepiej by było użyć właśnie mapy, bo można w niej iterować po jej elementach

uniques = new Map();
console.log(uniques);

// .set() -> setting a value to a key in a map

uniques.set("loved", 0);
console.log(uniques);

// .get() -> getting a value from key in the map

console.log(uniques.get("loved"));

// incrementing

let currentValue = uniques.get("loved")

uniques.set("loved", currentValue += 1)

console.log(uniques.get("loved"));

// 4.5.2. 1

// Odp: /[a-zA-Z']+/g

// 4.5.2. 2

uniques = new Map();
console.log(uniques)

let words2 = sonnet.match(/[a-zA-Z']+/g);
console.log(words2)

for (let i = 0; i < words2.length; i++) {
  let word = words2[i];
  console.log(word);
  let currentValue = uniques.get(word);
  console.log(currentValue);
  (uniques.get(word)) ? uniques.set(word, currentValue += 1): uniques.set(word, 1);
}

console.log(uniques);


