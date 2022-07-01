/*
  functions 
  the function accepts parameters
  we must call it (trigger it) by passing arrguments 

  parameters    => variables 
  arguments     => values


  return  => stop execution of code.
  default parameters ES6 method.
*/

/*
  Rest parameters : array of parameter for unlimited parameters

*/

function calculation(...numbers) {
    console.log(Array.isArray(numbers)); // true

    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return `final result is ${result}`;
}

console.log(calculation(1, 2, 3)); // final result is 6


/*
  anonymous function
*/

document.getElementById('button').onclick = function() {
    console.log('show the button');
}

setTimeout(function() {
    console.log('Hi Anwar')
}, 2000);


document.getElementById('button').onclick = sayHello;

function sayHello() {
    console.log('Hello Anwar')
}