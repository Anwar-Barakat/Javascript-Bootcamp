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




/*
  nested looping 
*/

let products = ['mouse', 'keyboard', 'screen', 'pen', 'pad', 'tablet'];
let colors = ['red', 'blue', 'green', 'black'];
let models = [2021, 2022];

for (let k = 0; k < products.length; k++) {
    console.log('-'.repeat(15));
    console.log('# ' + products[k])
    console.log('-'.repeat(15));

    console.log('Colors : \n')
    for (let l = 0; l < colors.length; l++) {
        console.log(colors[l])
    }

    console.log('Models : \n')
    for (let m = 0; m < models.length; m++) {
        console.log(models[m])

    }


}