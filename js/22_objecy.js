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


/*
  Objects : 
  Nested object 
*/

let user_3 = {
    name: 'Anwar',
    age: 24,
    skills: ['html', 'css', 'js'],
    available: false,
    addresses: {
        KSA: "Riyad",
        Syria: {
            one: "Yabroud",
            two: "Damascus"
        },
    },
    checkAvailability: function() {
        return this.available == true ? `Free for work` : 'not free';
    },
}
console.log(user_3.name); // Anwar
console.log(user_3.age); // age
console.log(user_3.skills); // (3) ['html', 'css', 'js'
console.log(user_3.skills.join("-")); // html-css-js
console.log(user_3.skills[2]); // js
console.log(user_3.addresses.KSA); // Riyad
console.log(user_3.addresses.Syria); // {one: 'Yabroud', two: 'Damascus'}
console.log(user_3.addresses.Syria.two); // Damascus
console.log(user_3["addresses"]["Syria"]["two"]); // Damascus
console.log(user_3["addresses"].Syria["two"]); // Damascus
console.log(user_3.checkAvailability()); // not free