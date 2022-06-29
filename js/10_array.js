/*
  Arrays :
  1-  create arrays 
  2-  access to array elements 
  3-  nested arrays
  4-  change array elements
  5-  check if that variable is array or not
*/

let myFriend = ["Anwar", "Mohamed", "Ali", ["Gamel", "Housam"]];

console.log(`Hi ${myFriend[0]}`); // Hi Anwar
console.log(`Hi ${myFriend[2]}`); // Hi Ali
console.log(`Hi ${myFriend[3][0]}`); // Hi Gamel
console.log(`Hi ${myFriend[3][0][0]}`); // Hi G

console.log(myFriend) // ['Anwar', 'Mohamed', 'Ali', Array(2)]
myFriend[3] = 'Fadi';
console.log(myFriend) // ['Anwar', 'Mohamed', 'Ali', 'Fadi']
myFriend[3] = ['Esaa', 'Omar'];
console.log(myFriend)

console.log(typeof myFriend) // object
console.log(Array.isArray(myFriend)) // true