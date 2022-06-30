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

  Loop control : 
  1-  break
  2-  continue
  3-  label
*/

let products = ['mouse', 'keyboard', 1, 'screen', 2, 'pen', 'pad', 'tablet', 3];
let colors = ['red', 'blue', 'green', 'black'];
let models = [2021, 2022];

mainLoop: for (let k = 0; k < products.length; k++) {

    if (products[k] == 'pen') {
        break;
    }

    if (typeof products[k] === 'number') {
        continue;
    }
    console.log('-'.repeat(15));
    console.log('# ' + products[k])
    console.log('-'.repeat(15));

    console.log('Colors : \n')
    nestedLoop: for (let l = 0; l < colors.length; l++) {
        if (colors[l] === 'blue') {
            break mainLoop;
        }
        console.log(colors[l])
    }

    console.log('Models : \n')
    for (let m = 0; m < models.length; m++) {
        console.log(models[m])

    }
}


/*
  advanced loop
*/

let items = ['mouse', 'keyboard', 'screen', 'pen', 'pad', 'tablet'];
let a = 0;
for (;;) {
    console.log(items[a])
    a++;
    if (a === items.length) break;
}