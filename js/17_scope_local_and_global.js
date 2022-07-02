/*
  Scope : 
    1-  Global Scope 
    2-  Local Scope
*/

let a = 1;
let b = 2;


console.log(`From global ${a}`); // 1
console.log(`From global ${b}`); // 2


function show() {
    console.log(`Function - from global ${a}`); // 1
    console.log(`Function - from global ${b}`); // 2
}
show();


function showLocaly() {
    let a = 10;
    let b = 20;
    console.log(`Function - from global ${a}`); // 10
    console.log(`Function - from global ${b}`); // 20
}
showLocaly();