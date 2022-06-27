/*
  string method part(1): 
  1-  access to the index using array 
  2-  access to the index using charAt
  3-  length
  4-  tirm
  5-  toUpperCase
  6-  toLowerCase
  7-  chain method  
*/

let yourName = "Anwar";
console.log(yourName[0]); // A
console.log(yourName.charAt(0)); // A
console.log(yourName.length); // 5

let yourNickName = "    Barakat ";
console.log(yourNickName.length); // 12
console.log(yourNickName.trim()); // Barakat

console.log(yourName.toUpperCase()); // ANWAR
console.log(yourNickName.toLowerCase()) // barakat

console.log(yourNickName.trim().charAt(4).toUpperCase()) // K