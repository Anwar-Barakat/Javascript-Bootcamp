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
  argument    => when we pass its value
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

