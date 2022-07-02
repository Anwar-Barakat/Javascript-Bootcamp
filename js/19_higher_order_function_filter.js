/*
    higher order function (filter method)
    => return a new array
*/

// Map VS Filter : 

let friends = ['Anwar', 'Ali', 'Omar', 'Belal', 'John', 'Sami'];
let friendsStartWithA = friends.filter((element) => {
    return element.startsWith("A") ? true : false;
});
console.log(friendsStartWithA); // (2) ['Anwar', 'Ali']

friendsStartWithA = friends.filter((element) => {
    return element.startsWith("A")
});
console.log(friendsStartWithA); // (2) ['Anwar', 'Ali']


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let addMap = numbers.map((element) => {
    return element + element;
});
console.log(addMap); // (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

let addFilter = numbers.filter((element) => {
    return element + element;
});
console.log(addFilter); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] =>mistake usage

let evenNumbers = numbers.filter((element) => {
    return (element % 2) == 0 ? true : false;
});
console.log(evenNumbers); // (5) [2, 4, 6, 8, 10]

evenNumbers = numbers.filter((element) => {
    return (element % 2) == 0;
});
console.log(evenNumbers); // (5) [2, 4, 6, 8, 10]