/*
  Number : 
  1-  syntactic suger "_"
  2-  e
  3-  **  
  4-  with decimal
  5-  number + bigInt
  6-  number + min value
  7-  number + max value
*/


console.log(1000000) // 1000000
    // console.log(1 _000_000) // 1000000
console.log(1e6) // 10000000
console.log(10 ** 6) // 1000000
console.log(1000000.0000) // 1000000
console.log(1000000.1) // 1000000.1
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308



/* 
  Math object : 
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc()     => remove the fraction value from the number
*/

console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100
console.log(Math.ceil(99.2)); // 100
console.log(Math.floor(99.9)); // 99
console.log(Math.min(10, 20, 30, 40, -10)); // -10
console.log(Math.max(10, 20, 30, 40, -10)); // 40
console.log(Math.pow(2, 5)) // 32
console.log(Math.random()); // 0.4291714273992244
console.log(Math.trunc(99.9)) // 99
console.log(Math.trunc(99.1)) // 99


/*
  challenge : 
*/

let a = 100;
let b = 200.5;
let c = 1e2;
let d = 2.4;

// find the smaller number in all variables and return it as a integer number :
console.log(Math.round(Math.min(a, b, c, d))); // 2

// use variables a & d one time to get the needed output (10000):
console.log(Math.pow(a, Math.floor(d)));

// Get integer (2) from d variable with 4 methods : 
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.ceil(d) - 1);

// use variables b + d to get  (67 as a number)
console.log(Number(Math.round(b) / Math.ceil(d))) // 67