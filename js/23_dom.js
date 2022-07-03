/*
  DOM   => Document Object Model
*/

// id in the page must be unique : 
let myIdElement = document.getElementById('#my-div');

// get the elements by tag name  
// if there are more that one paragraph, will return it as a collection
let myTagElements = document.getElementsByTagName("p");
myTagElements[0].innerHTML = 'Hi, I am Anwar';

// get the element by class :
let myClassElement = document.getElementsByClassName('my-span');

// The prince :
let myIdSelector = document.querySelector('#my-div ');
let myClassSelector = document.querySelector('.my-span');

// return it as a collection : 
let myClassSelectors = document.querySelectorAll('.my-span');

// get the title page :
let theTitle = document.title;

// get the body : 
let theBody = document.body

// get the forms in the page as a collection: 
let theForms = document.forms

// there is a input field has "one" as a name
let theFirstFormInput = document.forms[0].one;
let theFirstFormInputValue = theFirstFormInput.value;

// get the links : 
let theLinks = document.links;
let theFirstLink = theLinks[0].href