/*
  Destructuring Array :
  Is a javascript expression that allow us to extract data from
  arrays, objects and maps then set them into new, distrinct varibales
*/

let a = 1;
let b = 1;
let c = 1;
let d = 1;

let myFriends = ["Anwar", "Ali", "Juhn", "Omar"];

// let [a,b,c,d] = myFriends; // error   => the variables are already decleared

[a, b, c, d] = myFriends;

console.log(a); // Anwar
console.log(b); // Ali
console.log(c); // Juhn
console.log(d); // Omar

let [e, f, g] = myFriends;

console.log(e); // Anwar
console.log(f); // Ali
console.log(g); // Juhn

let [, i, j, , k = "Samer"] = myFriends;
console.log(i); // Ali
console.log(j); // Juhn
console.log(k); // Juhn

/*
  Advanced Distructuring Array Example :
*/

let theFriend = [
  "Anwar",
  "Ali",
  "Juhn",
  "Omar",
  ["Sami", "Mahmoud", ["Belal", "Saif"]],
];

let [, , , , [x, , [, y]]] = theFriend;

// we want this output :
console.log(x); // Sami
console.log(y); // Saif

/*
  Destructuring Array => Swaping Variables 
*/

let book = "video";
let video = "book";

// first way (traditional way):
let stash = book;

book = video;

video = stash;

// second way (destructuring array) :
[book, video] = [video, book];
