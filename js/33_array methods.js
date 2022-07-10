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

/*
Array method 
Array.copyWithin(target, start [opt], end [opt])
copy part of an array to another location in the same array
target : 
  index to copy part to

start : 
  index to start copying with

end 
  index to end copying with
*/

let myCopyArray = [10, 20, 30, 40, 50, "A", "B"];

// myCopyArray.copyWithin(3);

/*
start from 40
  there isn't start => so start from 0
  10, 20, 30, 40, 50, "A", "B"
  we but it instead of 40
  10, 20, 30, 10, 20, 30, 40, 50, "A", "B", 50, "A", "B"
  the number of array is 7 
  start from 0 => [10, 20, 30, 10, 20, 30, 40]
*/

// console.log(myCopyArray); // (7) [10, 20, 30, 10, 20, 30, 40]

// myCopyArray.copyWithin(4, 6);

// console.log(myCopyArray); // (7) [10, 20, 30, 40, 'B', 'A', 'B']

// myCopyArray.copyWithin(1, -2);

// console.log(myCopyArray); // (7) [10, 'A', 'B', 40, 50, 'A', 'B']

myCopyArray.copyWithin(1, -2, -1);

console.log(myCopyArray); // (7) (7) [10, 'A', 30, 40, 50, 'A', 'B']

/*
Array Methods :
Array.some(callback function(element, index, array), this arragument)
*/

let nums = [1, 2, 3, 4, 5, 6, 7];

let check = nums.some(function (e) {
  console.log("test"); // six time => because he pass on all element when he found num > 5 it stops
  return e > 5;
});

check = nums.some((e) => e > 5);

console.log(check); // true

// the same way :
let myNumber = 2;

check = nums.some((e) => {
  return e > this;
}, myNumber);

console.log(check); // true

function checkValue(array, arrgument) {
  return array.some((e) => {
    return e === arrgument;
  });
}

console.log(checkValue(nums, 20)); // false

console.log(checkValue(nums, 5)); // true

let rang = {
  min: 10,
  max: 20,
};

let checkInRange = nums.some((e) => {
  return e >= this.min && e <= this.max;
}, rang);

console.log(checkInRange); // false
