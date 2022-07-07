/*
  Set Data Type 
*/

let myData = [1, 1, 1, 2, 2, 3];

let uniqueData = new Set([1, 1, 1, 1, 2, 2, 3]);

console.log(myData); // (6) [1, 1, 1, 2, 2, 3]

console.log(uniqueData); // Set(3) {1, 2, 3}

console.log(uniqueData.size); // 3

console.log(myData[0]); // 1

console.log(uniqueData[0]); // undefined  => we cannot to set data type access using index

// addition :
uniqueData.add(4);

uniqueData.add(5);

console.log(uniqueData); // Set(5) {1, 2, 3, 4, 5}

console.log(uniqueData.size); // 5

// deleting :
uniqueData.delete(2);

console.log(uniqueData); // Set(4) {1, 3, 4, 5}

console.log(uniqueData.size); // 4


// Checking :
console.log(uniqueData.has("A")); // false


// clean each data : 
// uniqueData.clear();

// console.log(uniqueData); // Set(0) {size: 0}

// console.log(uniqueData.size); // 0
