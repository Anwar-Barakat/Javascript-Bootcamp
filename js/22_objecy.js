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
console.log(user.age); // 24
console.log(user.theName); // Anwar
console.log(user.sayHello()); // Hello