/*
  BOM
  Local Storage :
*/

// first way to add a new local storage
window.localStorage.setItem('color','#f8f8f8');

console.log(window.localStorage);

console.log(typeof window.localStorage); // object

// second way to add a new local storage
window.localStorage.fontWeight = 'bold';

window.localStorage['background-color'] = '#f00';


// get from local storage : 
let mainColor = window.localStorage.getItem('color'); // #f8f8f8

document.body.style.setProperty('--main-color', mainColor)

document.body.style.backgroundColor = mainColor


// remove from local storage : 
window.localStorage.removeItem('fontWeight')

// remove the whole storage
window.localStorage.clear();