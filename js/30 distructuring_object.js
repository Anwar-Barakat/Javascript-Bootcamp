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
