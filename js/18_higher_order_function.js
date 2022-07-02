/*
  Higher Order functions :
  It is a function that accepts functions as a parameters 
  It can also return a function.
*/


let myNums = [1, 2, 3, 4, 5];

let newArray = [];


for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray); // (5) [2, 4, 6, 8, 10]


// Same idea with map method
let recetArray = myNums.map(function(element, index, array) {
    return element + element;
}, 10);
console.log(recetArray); // (5) [2, 4, 6, 8, 10]


// same idea with arrow function : 
let modernArray = myNums.map((element, index, array) => element + element);
console.log(modernArray); // (5) [2, 4, 6, 8, 10]

// map method with function as a parameter
function collecting(element) {
    return element + element;
}

let myArray = myNums.map(collecting)
console.log(myArray); // (5) [2, 4, 6, 8, 10]




/*
    Challenge : 
*/

let swappingCase = "aNwAr";

let sw = swappingCase.split("").map((element) => {
    return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()
}).join("");
console.log(sw); // AnWaR


let invertedNumbers = [-1, -20, 15, 100, -30, -10];
let inv = invertedNumbers.map((element) => {
    return -element === element ? element : -element;
});
console.log(inv); // (6) [1, 20, -15, -100, 30, 10]


let ignoreNumbers = "Anw1321ar567";
let ign = ignoreNumbers.split("").map((element) => {
    return isNaN(parseInt(element)) ? element : '';
}).join("");
console.log(ign); // Anwar