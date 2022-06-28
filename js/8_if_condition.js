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