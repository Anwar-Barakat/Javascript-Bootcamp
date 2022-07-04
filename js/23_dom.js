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


/*
  DOM : 
  check attributes 
*/

let paragraphAttr = document.getElementsByTagName('p')[0]

if (paragraphAttr.hasAttributes()) {

    if (paragraphAttr.hasAttribute('data-scr')) {
        if (paragraphAttr.getAttribute('data-src') === '')
            paragraphAttr.removeAttribute('data-src');
        else
            paragraphAttr.setAttribute('data-src', 'new val');
    } else {
        console.log(`The data-src attribute is not found`);
    }
} else {
    console.log(`The attributes is found`);
}



/*
  DOM :
  create and append elements 
*/

let myDiv = document.createElement('div');

myDiv.className = "product";

// two ways to append attribute to element : 
let myAttribute = document.createAttribute('data-custom');

myDiv.setAttributeNode(myAttribute)

myDiv.setAttribute('my-test', 'testing')

// add comment :
let myComment = document.createComment('This comment from js');

myDiv.appendChild(myComment);

// append text to element : 
let myText = document.createTextNode('My Text');

myDiv.appendChild(myText);

// append element to body : 
document.body.appendChild(myDiv);


/*
  DOM Practice :  
*/

for (let i = 1; i <= 100; i++) {

    let theElement = document.createElement('div');

    let theHead = document.createElement('h1');

    let theParagraph = document.createElement('p');

    let theHeadingText = document.createTextNode(`The product ${i} title`);

    let theParagraphText = document.createTextNode(`The product ${i} paragraph`);

    theElement.className = "product";

    theHead.appendChild(theHeadingText);

    theParagraph.appendChild(theParagraphText)

    theElement.appendChild(theHead)

    theElement.appendChild(theParagraph)

    document.body.appendChild(theElement)

}


/*
  DOM : 
  dealing with childrens
*/

let myElement = document.querySelector('.my-div')

// get the element inside the parent as a collection :
let childrens = myElement.children;

let firstChildren = childrens[0].innerHTML = "children 1";

// get the element inside the parent even the comment and spaces as a collection :
let childrensWithComments = myElement.childNodes;

// get the first child (maybe it is a comment):
let theFirstChild = myElement.firstChild;

// get the last child (maybe it is a comment):
let theLastChild = myElement.lastChild;


// get the first child (exclusively an element):
let theFirstElementChild = myElement.firstElementChild;

// get the last child (exclusively an element):
let theLastElementChild = myElement.lastChild;