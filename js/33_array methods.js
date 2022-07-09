/*
  Array methods : 
*/

console.log(Array.from("Anwar")); // (5) ['A', 'n', 'w', 'a', 'r']

console.log(
  Array.from("12345", function (n) {
    return n + n;
  })
); // (5) ['11', '22', '33', '44', '55']

console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
); // (5) [2, 4, 6, 8, 10]

console.log(Array.from("12345", (n) => +n + +n)); // (5) [2, 4, 6, 8, 10]

let myArray = [1, 1, 1, 1, 2, 3, 4, 4];

// first way to get the unique elements :
let mySet = new Set(myArray);

console.log(mySet); // Set(4) {1, 2, 3, 4}

console.log(Array.from(mySet)); // (4) [1, 2, 3, 4]

// second way to get the unique elements :

console.log([new Set(myArray)]); // 0: Set(4) {1, 2, 3, 4}

console.log([...new Set(myArray)]); // (4) [1, 2, 3, 4]
