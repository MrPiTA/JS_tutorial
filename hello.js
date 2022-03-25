// console.log("Hello, world!", "What's poppyn?");
// console.log(1);

// konkantenacja stringów
"foo" + "bar"

// definiowanie zmiennych -> najlepiej z let
// nazwy zmiennych powinny być w camelCasie
// thisIsAVariableName
let firstName = "Michael"
let lastName = "Hartl"
// dawniej robione przez var
var x = "foo";
// aby wartość po prostu
firstName;
// łączenie
firstName + lastName;
firstName + " " + lastName;
// interpolacja `${variable} whatever`
// !uwaga:  `` to nie to samo co ''
`${firstName} is my first name`

// printing -> console.log("")
// da to takie same efekty
console.log("Michael", "Hartl")
console.log("Michael" + " " + "Hartl")

// length
"badger".length

// comparisions
"badger".length > 3
"badger".length <= 3

// equality ! i inequality 
// "==" - loose equality operator - konwertuje dane po lewej jak i po prawej stronie i dopiero wtedy sprawdza ich równość
// "!="
// "===" - strict equality - porównuje data types i wartości jednocześnie
// "!=="


// if, else
// w nodzie else musi iść po } -> } else {
//                                    ...
//                                     } 
let password = "foo";
if (password.length < 6) {
  "Password is to short!"
}
else {
  "Password is long enough!"
}

// operatory logiczne 
// AND - &&
// OR - ||
// Negacja - !  ,np !true to jest false, albo !false to jest true  

// zdefiniowanie zmiennych
let x = "foo";
let y = "";

// przykład z AND
if (x.length === 0 && y.length === 0) {
  console.log("Strings are empty!")
}
else {
  console.log("At least one of the strings is not empty!")
}

// przykład z OR
if (x.length === 0 || y.length === 0) {
  console.log("At least one of the strings is empty")
}
else {
  console.log("Neither of the strings is empty")
}

// przykład z negacją
if (!(x.length === 0)) {
  console.log("x is not empty!")
}
else {
  console.log("x is empty!")
}

// to samo ale negacja operatora
if (x.length !== 0) {
  console.log("x is not empty!")
}
else {
  console.log("x is empty!")
}

// double-bang " !! " -> konewetowanie na wartość bool
//true
!!x;
//false
!!y;

// tak jak w pythonie jak chcemy ,żeby coś się działo gdy nie jest puste to
// "" to false
if (x) {
  console.log("nie puste")
}
else {
  console.log("puste")
}

// nw czm ,ale robienie x || y zwraca "foo", a x && y zwraca "".
// aby to przekonwertować na wartość bool trzeba !!(x || y)
// ale podejrzewam ,że w if'ach oraz w pętlach nie trzeba tak konwertować