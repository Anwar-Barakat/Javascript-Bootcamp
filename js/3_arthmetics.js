/*
  Arithmetic operators : 
  +   => addition
  -   => subraction
  *   => multiplicaion
  /   => division
  **  => exponentiation 
  %   => modulus (division reminder)
  ++  => increment [post - pre]
  --  => decrement [post - pre]
*/

console.log(10 + 20); // 30
console.log(10 + "Anwar"); // 10Anwar

console.log(10 - 20); // -10
console.log(10 - "Anwar "); // NaN

console.log(typeof NaN); // number

console.log(2 ** 4) // 16
console.log(10 % 2); // 0
console.log(11 % 5); // 1

let a = 1;
console.log(a++) // 1
console.log(++a) // 3   => because the a became 2