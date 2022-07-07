/*
  Destructuring Object :  
*/

let user = {
  theName: "Anwar",
  theAge: 25,
  theTitle: "web developer",
  theCountry: "Syria",
};

let theName = user.theName;
let theAge = user.theAge;
let theTitle = user.theTitle;
let theCountry = user.theCountry;

console.log(theName); // Anwar
console.log(theAge); // 25
console.log(theTitle); // web developer
console.log(theCountry); // Syria

// now, if  the variables already has been declered, we don't need to redeclare it twice.
({ theName, theAge, theCountry } = user);

// the variables haven't declared before :
let { x, y, z } = user;
console.log(x); // undefined  => we must use the same object key
console.log(y); // undefined  => we must use the same object key
console.log(z); // undefined  => we must use the same object key

/*
  Destructuring Function Parameter
*/

const username = {
  theName: "Anwar",
  theAge: 25,
  skills: {
    html: 70,
    css: 60,
  },
};

showDetails(username);

function showDetails(object) {
  console.log(`Your name is ${object.theName}`); // Your name is Anwar
  console.log(`Your age is ${object.theAge}`); // Your age  is Anwar
  console.log(`Your css skill progress is ${object.skills.css}`); // Your css skill progress is 60
}

// use destructuring function parameter

showInfo();

function showInfo({ theName, theAge, skills: { css } } = username) {
  console.log(`Your name is ${theName}`); // Your name is Anwar
  console.log(`Your age is ${theAge}`); // Your age  is Anwar
  console.log(`Your css skill progress is ${css}`); // Your css skill progress is 60
}

// use destructuring function parameter with alias
showInfoormation();

function showInfoormation({ theName : n, theAge : a, skills: { css : c } } = username) {
  console.log(`Your name is ${n}`); // Your name is Anwar
  console.log(`Your age is ${a}`); // Your age  is Anwar
  console.log(`Your css skill progress is ${c}`); // Your css skill progress is 60
}