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


/*
  BOM
  Session Storage Vs Local Storage:
  When I close the chrome tab or close the browser , the sessions will remove
  In comparison with, Items in storage will stay

  new tap = new session
  duplicate tab = copy session
*/

// local storage and session storage separated from each other
window.localStorage.setItem('color','red');

window.sessionStorage.setItem('color','red')

let usernameInput = document.querySelector("[name=username]");
usernameInput.onblur = ()=>{

  window.sessionStorage.setItem('username-input', this.value);

};

if(window.sessionStorage.getItem('username-input')){

  usernameInput.value = window.sessionStorage.getItem('username-input')
}