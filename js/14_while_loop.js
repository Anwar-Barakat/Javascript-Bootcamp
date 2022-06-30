/*
  while loop
*/

let items = ['mouse', 'keyboard', 'screen', 'pen', 1, 'pad', 2, 'tablet'];

let index = 0;
while (index < items.length) {

    if (typeof items[index] === 'number')
        break;

    console.log(items[index])
    index++;
}