/*
  Spread Operator
*/

// spread with string :
console.log("Anwar"); // Anwar

console.log(..."Anwar"); // A n w a r

console.log([..."Anwar"]); // (5) ['A', 'n', 'w', 'a', 'r']

// concatenation with array :
let myArray1 = [1, 2, 3];

let myArray2 = [4, 5, 6];

let contactArray = [...myArray1, ...myArray2];

console.log(contactArray); // (6) [1, 2, 3, 4, 5, 6]

// copy array :
let copyArray = [...myArray1, "a", "b"];

console.log(copyArray); // (5) [1, 2, 3, 'a', 'b']

// push inside array :
let myFriend = ["Ali", "Husam", "Hussain"];

let newFriend = ["Jain", "John"];

myFriend.push(...newFriend); // or myFriend.push("Jain", "John");

console.log(myFriend); // (5) ['Ali', 'Husam', 'Hussain', 'Jain', 'John']

// use it with math object :

let myNums = [1, 3, 5, 6, 8, 9, 123, 1111];

console.log(Math.max(myNums)); // NaN

console.log(Math.max(1, 3, 5, 6, 8, 9, 123, 1111)); // 1111

console.log(Math.max(...myNums)); // 1111

// use it with object => merge objects
let firstOb = {
  a: 1,
  b: 2,
};

let SecondOb = {
  c: 3,
  d: 4,
};

let bothOb = { ...firstOb, ...SecondOb, e: 5 };

console.log(bothOb); // {a: 1, b: 2, c: 3, d: 4, e: 5}
