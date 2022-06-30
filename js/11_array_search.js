/*
  Array method : 
  1-  indexOf(search element, from index[opt])
  2-  lastIndexOf(search element, from index[opt])
  3-  includes(value to find, from index [opt])
*/

let myFriend = ["Anwar", "Ali", "Omar", "Saed", "Ahmed", "Ali"];

console.log(myFriend.indexOf("Ali")); // 1  => the first index from the left (start)
console.log(myFriend.indexOf("Ali", 3)); // 5
console.log(myFriend.indexOf("Anwar", 3)); // -1

console.log(myFriend.lastIndexOf("Ali")); // 5 => the first index from the right (end)
console.log(myFriend.lastIndexOf("Ali", -3)); // 1 
console.log(myFriend.lastIndexOf("Ali", 0)); // 5 => the first index from the right (end)

console.log(myFriend.includes("Ahmed")); // true
console.log(myFriend.includes("Omar")); // true
console.log(myFriend.includes("Omar", 2)); // true
console.log(myFriend.includes("Omar", 3)); // false