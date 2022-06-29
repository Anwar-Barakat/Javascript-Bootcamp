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



/*
    Logical Or || 
    -   null + undefined + falsy value
    -   falsy value : 
        1-  zero 
        2-  empty string 
        3-  null
        4-  false
            Boolean method we use it to know if the value true or false

    Nullish Coalescing Operator ?? 
    -   null + undefined
*/

let thePrice = 100;
console.log(`the price is ${thePrice}`); // 100

thePrice = null;
console.log(`the price is ${thePrice}`); // null

thePrice = 0;
console.log(`the price is ${thePrice}`); // 0

// it is not logical the price is null or zero so we will use logical or instead of any falsy value
console.log(`the price is ${thePrice || 200}`); // 200

let theDiscount = 200;
console.log(`the price is ${theDiscount}`); // 200

theDiscount = null;
console.log(`the price is ${theDiscount}`); // null

theDiscount = null;
console.log(`the price is ${theDiscount ?? 20}`); // 20

theDiscount = undefined;
console.log(`the price is ${theDiscount ?? 20}`); // 20

theDiscount = 0;
console.log(`the price is ${theDiscount ?? 20}`); // 0