/*
  BOM : 
  location object
*/

console.log(window.location.href); // http://127.0.0.1:5500/

// window.location.href = "https:google.com";

console.log(window.location.host); //127.0.0.1:5500

console.log(window.location.hostname); // 127.0.0.1

console.log(window.location.protocol); // http:

console.log(window.location.hash); // get after #

// reload the page
// console.log(window.location.reload()); 

// remove the current page from the session history
console.log(window.location.replace('https://elzero.org')); 

// doesn't remove the current page from the session history
console.log(window.location.assign('https://elzero.org')); 
