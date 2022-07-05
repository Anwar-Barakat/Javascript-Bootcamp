/*
  BOM (Browser Object Model)

  alert(message)    => Bad to use
  confirm(message)  => Bad to use
  prompt(message)   => Bad to use 
  because they stop the website
  we just waana know they are exsits but we don't use them
*/

// window.alert('Hello');
// this.alert('Hello');
// alert('Hello');

// confirm('Are you need to delete ?')

// let theDay = prompt('Suitable day for you ?')

// if(theDay){
//   console.log(theDay)
// }



/*
  BOM
  setTimeout, clearTimeout

  parameter   => in the function
  argument    => the values when we pass to it
*/

setTimeout(() => {
    console.log("Hi Anwar"); // Hi Anwar
}, 3000); 

function sayHello() {
  console.log("Hi Anwar"); 
}

setTimeout(sayHello,3000) // Hi Anwar

function hiUsername(username, age) { 
  console.log(`Hi ${username}, your age is ${age}`);
 }

//  we pass the argument after timeout :
 setTimeout(hiUsername,3000,"Anwar",24) // Hi Anwar, your age is 24


 let counter = setTimeout(sayHello,5000)

 let stopBtn = document.getElementById('stop');

 stopBtn.addEventListener('click',()=>{

  // clearTimeout need handler to pause or stop it.
  clearTimeout(counter)
 });



 /*
  BOM :
  setInterval, clearInterval 
 */

setInterval(() => {
    console.log('Hi Anwar'); // Hi Anwar  => every 1 second
}, 1000);

function hiAnwar() {
  console.log("Hi Anwar"); 
}

setInterval(hiAnwar,1000) // Hi Anwar => every 1 second


function userInfo(username, age) { 
  console.log(`Hi ${username}, your age is ${age}`);
 }

//  we pass the argument after timeout :
 setInterval(userInfo,1000,"Anwar",24) // Hi Anwar, your age is 24


 let intervalCounter = setInterval(hiAnwar,1000)

 let intervalStopBtn = document.getElementById('stop');

 stopBtn.addEventListener('click',()=>{

  // clearTimeout need handler to pause or stop it.
  clearInterval(intervalCounter)
 });


 let myCounter = document.createElement('div');

 let theValue = document.createTextNode('10');

 myCounter.classList.add('counter')

 myCounter.appendChild(theValue);

 document.body.appendChild(myCounter)

 let theCounter = document.querySelector('.counter')

 function countDown() { 
    theCounter.innerHTML -=1;

    if(theCounter.innerHTML === "0"){
      clearInterval(intervalCounter)
    }
  }

  intervalCounter = setInterval(countDown,1000)