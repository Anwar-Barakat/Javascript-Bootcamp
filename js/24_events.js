/*
  Events : 
*/

// Form validations :
let usernameInput = document.querySelector("[name='username']");

let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function(e) {

    let usernameValid = false;
    let ageValid = false;

    if (usernameValid === false || ageValid === false) {
        e.preventDefault();
    }

    if (usernameInput.value !== "" && usernameInput.value.length <= 10) {
        usernameValid = true;
        console.log('usename is value')
    }

    if (ageInput.value !== '') {
        ageValid = true;
        console.log('age is value')
    }
}

let googleLink = document.querySelector('.google');

googleLink.onclick = function(event) {
    event.preventDefault();
}