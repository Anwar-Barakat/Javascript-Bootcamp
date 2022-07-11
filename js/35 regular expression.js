/*
  Regular expression : 

  Modifier  => flags
  i         => case insensitive
  g         => global
  m         => multiline

  match return null if no match is found
*/

let myString = "Hello Elzero web School I love elzero";

let regex1 = /elzero/;

console.log(myString.match(regex1)); // ['elzero', index: 31, input: 'Hello Elzero web School I love elzero', groups: undefined]

let regex2 = /elzero/i;

console.log(myString.match(regex2)); // ['Elzero', index: 6, input: 'Hello Elzero web School I love elzero', groups: undefined]

let regex3 = /elzero/gi;

console.log(myString.match(regex3)); // (2) ['Elzero', 'elzero']
