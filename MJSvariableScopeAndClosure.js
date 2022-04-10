
// Code blocks

{
  let message = "hello";
  console.log(message);
}
// console.log(message);

if (true) {
  let message = "there";
  console.log(message)
}
// console.log(message);

//// ^ Block level variables

// Nested Functions

function sayHiBye(fname, lname) {
  // helper nested function
  function getFullName() {
    return fname + " " + lname; 
  }
  console.log("Hi, " + getFullName());
  console.log("By, " + getFullName());
}

// aby lepiej zrozumieć dlaczego ta przykładowa funkcja makeCounter z książki zwraca na początku 0, zobacz tą funkcję
// to przez to ,że użyli counter++ w return
// counter++ zwraca counter taki jaki jest i w międzyczasie zwiększa counter o 1

function test() {
  i = 0
  return i++
}

console.log(test())
console.log(test())


// to też musisz zrozumieć / zobaczyć

let bye = function hello(x) {
  console.log("hello " + x)
  return x
}

bye("Ania")
bye("Kasia")


//// makeCounter
// What’s much more interesting, a nested function can be returned: either as a property of a new object or as a result by itself.
// It can then be used somewhere else. No matter where, it still has access to the same outer variables.

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter(); // te przypisanie zachowuje stan makeCounter(), ponieważ

// A variable is a property of a special internal object, associated with the currently executing block/function/script.
// Working with variables is actually working with the properties of that object.

// jakby tworzy Ci się nowy obiekt za każdym razem, który ma swoją enviroment variable, która zapisuje stan środowiska wywołania

// oraz, ponieważ przez to ,że zwraca wewnętrzną funkcję, która jest więc dostępna po wywołaniu zewnętrznej funkcji, więc w takim wypadku garbage collector nie usuwa stanu funkcji zewnętrznej.
// nw czy głupot tutaj nie piszę... 


console.log(counter())
console.log(counter())
console.log(counter())

let counter2 = makeCounter()

console.log(counter2())
console.log(counter2())
console.log(counter2())

// console.log(makeCounter()())
// console.log(makeCounter()())
// console.log(makeCounter()())



function suma(a, b = 0) {
  let suma = 0;

  return function (a, b = 0) {
    suma = suma + a + b;
    return suma;
  }
}



// console.log(suma(2, 3))
console.log("sumaHelper call")
// console.log(sumahelper(2, 3))

suma1 = suma();

console.log(suma1(2, 3));
console.log(suma1(2, 3));
console.log(suma1(2, 3));


