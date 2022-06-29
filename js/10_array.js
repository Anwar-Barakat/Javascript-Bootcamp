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


/*
  array length
*/

console.log(myFriend.length); // 4

// myFriend[6] = "Huda";
// console.log(myFriend.length); // 7 => now, there are two empty element in this array
// to add the element in the end of that array dynamically : 

myFriend[myFriend.length] = "Huda";
console.log(myFriend.length); // 5

// for example i wanna update the last element in that array :

console.log(myFriend); // ['Anwar', 'Mohamed', 'Ali', Array(2), 'Huda']
console.log(myFriend.length); // 5
myFriend[myFriend.length - 1] = "Zide";
console.log(myFriend); //  ['Anwar', 'Mohamed', 'Ali', Array(2), 'Zide']
console.log(myFriend.length); // 5



/*
  Array methods : (adding and removing)
  1-  unshift(" ", " ") add the elements at the first 
  2-  push(" ", " ") add the elements at the end
  3-  shift() remove from the first 
  4-  
*/

let theFriend = ["Anwar", "Mohamed", "Ali", "Gamel", "Housam"];
console.log(theFriend); // (5) ['Anwar', 'Mohamed', 'Ali', 'Gamel', 'Housam']

theFriend.unshift("Omar", "Samer");
console.log(theFriend); // (7) ['Omar', 'Samer', 'Anwar', 'Mohamed', 'Ali', 'Gamel', 'Housam']

theFriend.push("Said", "John");
console.log(theFriend); // (9) ['Omar', 'Samer', 'Anwar', 'Mohamed', 'Ali', 'Gamel', 'Housam', 'Said', 'John']

theFriend.shift();
console.log(theFriend); // (8) ['Samer', 'Anwar', 'Mohamed', 'Ali', 'Gamel', 'Housam', 'Said', 'John']

let theLast = theFriend.pop();
console.log(theFriend); // (7) ['Samer', 'Anwar', 'Mohamed', 'Ali', 'Gamel', 'Housam', 'Said']
console.log(theLast); // John