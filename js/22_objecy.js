/*
  Object : 
  window in js is object 
  also location is nested object from window
*/

typeof window // object 
typeof window.location // object 


// to get the link of website : 
window.location.href

// to open another website : 
// window.location.assign('https://google.com');

// create a new object : 
let user = {
    // properties : 
    theName: "Anwar",
    age: 24,

    // methods 
    sayHello: function() {
        console.log(`Hello`)
    }
}
console.log(user.theName); // Anwar
console.log(user.age); // 24
console.log(user.sayHello()); // Hello


/*
  Objects : 
  Dot Notation vs Bracket Notation
  Dynamic Porperty Name
*/

let user_1 = {
    theName: "Anwar",
    "country of": "Syria",

    // methods 
    sayHello: function() {
        console.log(`Hello`)
    }
}
console.log(user_1["theName"]); // Anwar
console.log(user_1["country of"]); // Syria
console.log(user.sayHello()); // Hello

let myVar = "country";

let user_2 = {
    theName: "Anwar",
    country: "Syria"
}
console.log(user_2.theName); // Anwar
console.log(user_2.country); // Syria
console.log(user_2.myVar); // undefined
console.log(user_2[myVar]); // Syria