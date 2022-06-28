/*
  nested if 
*/
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount == true)
    price -= discountAmount;
else if (country == 'Egypt') {
    price -= discountAmount + 10;
    if (student == true)
        price -= 20;
} else
    price -= discountAmount - 10;

console.log(price); // 40



/*
  conditonal ternary operator : 
  condition ? true : false ;
*/

let theName = "Anwar",
    theGender = "Male",
    theAge = 25;


if (theGender == "Male") {
    console.log('Mr');
} else {
    console.log('Mrs');
}

let theValue = theGender == "Male" ? 'Mr' : 'Mrs';
console.log(theValue);
console.log(`Hello ${theValue}. ${theName}`); // Hello Mr. Anwar


let theValue2 = theAge < 25 ? '25' : theAge >= 25 && theAge <= 50 ? '25 - 50' : theAge > 50 ? 'larger than 50' : 'undefined';

console.log(theValue2) // 25 - 50