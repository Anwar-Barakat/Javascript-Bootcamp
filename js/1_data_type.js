/*
  data type :  
  1-  string
  2-  number
  3-  array   => object
  4-  object 
  5-  boolean
  6-  undefined
  7-  null    => object
*/

console.log(typeof("Anwar Barakat")); // string
console.log(typeof "Anwar Barakat"); // string
console.log(typeof 5000); // number 
console.log(typeof 5000.1); // number
console.log(typeof [10, 20, 30]); // array => object 
console.log(typeof ['Anwar', 'Ali', 'Mohamed']); // array => object
console.log(typeof { name: 'Anwar', age: 25, country: 'Syria' }); // object
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // null



/*
  Var :
  1-  redeclare               => yes
  2-  access before declare   => undefined
  3-  varible scope drama 
      [Added to window]       => yes

  Let : 
  1-  redeclare               => no with error
  2-  access before declare   => Error with specific line 
  3-  varible scope drama 
      [Added to window]       => no

  Const : 
  1-  redeclare               => no with error
  2-  access before declare   => Error with specific line 
  3-  varible scope drama 
      [Added to window]       => no
*/

var a = 10;
var a = 20; // this is redeclare
console.log(a) // 20


let b = 10;
let b = 20; // Uncaught SyntaxError: Identifier 'b' has already been declared
console.log(b)


const c = 10;
const c = 20; // Uncaught SyntaxError: Identifier 'b' has already been declared
console.log(c)


console.log(d); // undefined
var d = 1;


console.log(e); // Uncaught ReferenceError: Cannot access 'e' before initialization
let e = 1;


console.log(f); // Uncaught ReferenceError: Cannot access 'f' before initialization
const f = 1;


var aa = 10;
console.log(window.aa); // 10