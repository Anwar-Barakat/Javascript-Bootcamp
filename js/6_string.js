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





/*
  mand  => mandatary 
  opt   => optional
  string methods part(2): 
  1-  indexOf(value [mand], start [opt] | 0) 
  2-  lastIndexOf(value [mand], start [opt] | string.length) 
  3-  slice(start [mand], end [opt])
  4-  repeat(times)
  5-  split(separator [opt], limit [opt])
*/



let a = "Anwar web developer";
console.log(a.indexOf("web")); // 6
console.log(a.indexOf("web", 7)); // -1

console.log(a.lastIndexOf("web")); // 6
console.log(a.indexOf("e")); // 7
console.log(a.lastIndexOf("e")); // 17

console.log(a.slice(0)); // Anwar web developer
console.log(a.slice(6)) // web developer
console.log(a.slice(6, 9)); // web
console.log(a.slice(-9)); // developer

console.log(a.repeat(2)); // Anwar web developerAnwar web developer

console.log(a.split()); // ['Anwar web developer']
console.log(a.split("")); // ['A', 'n', 'w', 'a', 'r', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
console.log(a.split(" ")); // ['Anwar', 'web', 'developer']
console.log(a.split(" ", 2)); // ['Anwar', 'web']

let b = "anwar@gmail.com";
console.log(b.split("@")); // ['anwar', 'gmail.com']

let c = b.split("@");
let d = c[0];
console.log(d); // anwar



/*
  string method part(3) : 
  1-  substring(start [mand], end [opt])
  2-  substr(start [mand], charcters to extract)
  3-  includes(value [mand], start [opt] default is 0)
  3-  startsWith(value [mand], start [opt] default is 0)
  3-  endsWith(value [mand], end [opt] default string.length)
*/

let myString = "Anwar web developer";
console.log(myString.substring(6)); // web developer
console.log(myString.substring(6, 9)); // web
console.log(myString.substring(9, 6)); // web     => this method make swap in this case between start & end
console.log(myString.substring(-10, 5)) // Anwar  => 0 - 5
console.log(myString.substring(myString.length - 1)) // r
console.log(myString.substring(myString.length - 9)) // developer
console.log(myString.substring(myString.length - 13, myString.length - 10)); // web

console.log(myString.substr(0)); // Anwar web developer
console.log(myString.substr(0, 5)) // Anwar
console.log(myString.substr(30)) // empty string
console.log(myString.substr(-13, 3)) // web

console.log(myString.includes("web")); // true
console.log(myString.includes("web", 6)); // true
console.log(myString.includes("web", 7)); // false

console.log(myString.startsWith("web", 7)); // false

console.log(myString.endsWith("r")); // true
console.log(myString.endsWith("er")); // true
console.log(myString.endsWith("r", 5)); // true , 5 => the length of the string , it start 0 -> 5  
console.log(myString.endsWith("b", 9)); // true , 9 => the length of the string , it start 0 -> 9