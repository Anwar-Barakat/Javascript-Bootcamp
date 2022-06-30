/*
  Array methods (searching): 
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




/*
  Array methods (slicing) : 
  1-  slice(start [opt], end [opt]) => return a new array
  2-  splice(start [mand], deleteCount [opt], the items to add [opt])
*/

let theFriends = ["Anwar", "Ali", "Omar", "Saed", "Ahmed", "Ali"];
console.log(theFriends); // (6) ['Anwar', 'Ali', 'Omar', 'Saed', 'Ahmed', 'Ali']
console.log(theFriends.slice()); // (6) ['Anwar', 'Ali', 'Omar', 'Saed', 'Ahmed', 'Ali']
console.log(theFriends.slice(2)); // (4) ['Omar', 'Saed', 'Ahmed', 'Ali']
console.log(theFriends.slice(2, 4)); // (2) ['Omar', 'Saed'] => not including the end element
console.log(theFriends.slice(-3)); // (3) ['Saed', 'Ahmed', 'Ali']
console.log(theFriends.slice(1, -3)); // (2) ['Ali', 'Omar']
console.log(theFriends.slice(-4, -2)); // (2) ['Omar', 'Saed']
console.log(theFriends); // (6) ['Anwar', 'Ali', 'Omar', 'Saed', 'Ahmed', 'Ali']



console.log(theFriends); // (6) ['Anwar', 'Ali', 'Omar', 'Saed', 'Ahmed', 'Ali']
console.log(theFriends.splice(0, 0, "Samer", "Huda"));
console.log(theFriends); // (8) ['Samer', 'Huda', 'Anwar', 'Ali', 'Omar', 'Saed', 'Ahmed', 'Ali']
console.log(theFriends.splice(1, 1, "Galal"));
console.log(theFriends); // (8) ['Samer', 'Galal', 'Anwar', 'Ali', 'Omar', 'Saed', 'Ahmed', 'Ali']
console.log(theFriends.splice(2, 3, "Belal"));
console.log(theFriends); // (6) ['Samer', 'Galal', 'Belal', 'Saed', 'Ahmed', 'Ali']
console.log(theFriends.splice(4, 2));
console.log(theFriends); // (4) ['Samer', 'Galal', 'Belal', 'Saed']
console.log(theFriends.splice(1, 3, "Anwar"));
console.log(theFriends); // (2) ['Samer', 'Anwar']


/*
  array methods (joined) : 
  1-  concat (array, array) => return a new array
  2-  join(separator)
*/

let firstFriend = ["Anwar", "Ali", "Hani", "Samer"];
let secondFriend = ["Sameh", "Osama"];
let thirdFriend = ["Shady", "John"];

let allFriend = firstFriend.concat(secondFriend);
console.log(allFriend); // (6) ['Anwar', 'Ali', 'Hani', 'Samer', 'Sameh', 'Osama']

allFriend = firstFriend.concat(secondFriend, theFriends);
console.log(allFriend); // (8) ['Anwar', 'Ali', 'Hani', 'Samer', 'Sameh', 'Osama', 'Samer', 'Anwar']

allFriend = firstFriend.concat(secondFriend, theFriends, 1, [2, 3]);
console.log(allFriend); // (11) ['Anwar', 'Ali', 'Hani', 'Samer', 'Sameh', 'Osama', 'Samer', 'Anwar', 1, 2, 3]

allFriend = firstFriend.join();
console.log(allFriend); // Anwar,Ali,Hani,Samer

allFriend = firstFriend.join("");
console.log(allFriend); // AnwarAliHaniSamer

allFriend = firstFriend.join(" ");
console.log(allFriend); // Anwar Ali Hani Samer

allFriend = firstFriend.join("-");
console.log(allFriend); // Anwar-Ali-Hani-Samer


allFriend = firstFriend.join("-").toUpperCase();
console.log(allFriend); // ANWAR-ALI-HANI-SAMER