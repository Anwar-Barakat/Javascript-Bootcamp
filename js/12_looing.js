/*
  Loop on sequences : 
*/

let myFriend = ["Anwar", "Ali", 1, 2, "Omar", 3, "Saed", "Ahmed", "Ali", 4];

// to print the element of array
for (let i = 0; i < myFriend.length; i++) {
    console.log(myFriend[i])
}

let justNames = [];

for (let j = 0; j < myFriend.length; j++) {
    if (typeof myFriend[j] === 'string')
        justNames.push(myFriend[j]);
}

console.log(justNames)