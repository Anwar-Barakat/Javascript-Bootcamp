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


/*
  Scope : 
  - Lexical Scope
*/

// example 1 : 
function parent_1() {
    let a = 10;

    function child() {
        console.log(a); // 10
    }
    child()
}
parent_1();

// example 2 : 
function parent_2() {
    let a = 10;

    function child() {
        let a = 20;
        console.log(a); // 20
    }
    child()
}
parent_2();

// example 3 : 
let aa = 10;

function parent_3() {

    function child() {
        console.log(aa); // 10
    }
    child()
}
parent_3();

// example 3 : 
function parent_3() {

    function child() {
        console.log(a); // 10

        console.log(`From grand : ${bb}`); // error => bb is not defined

        function grand() {
            let bb = 30;
            console.log(`From grand : ${bb}`); // 30
        }
    }
    child()
}
parent_3();