/*
  What is JSON : 
  - javascript object notation
  - format for sharing data between server and client 
  - alternative to XML

  The Differences between JSON & XML: 
  JSON	                  XML
  Text Based Format	      Markup Language
  Lightweight	            Heavier
  Doesn’t use tags	      Use tags
  Code is short	          Code isn’t short
  Can use arrays 	        Can’t use arrays
  Not support comment	    Support comment
*/

/*
  API :
  Application Programming Interface.
*/

/*
  JSON 
  JSON.parse      => convert text data to JS object
  JSON.stringify  => convert JS object to string
*/

let dataFromServer = '{"username":"anwar","age":24}';

console.log(typeof dataFromServer); // string

console.log(dataFromServer); // {"username":"anwar","age":24}

let myJsObject = JSON.parse(dataFromServer);

console.log(typeof myJsObject); // object

console.log(myJsObject); // {username: 'anwar', age: 24}

myJsObject["username"] = "Anwar Barakat";

myJsObject["age"] = 25;

let sendDateToServer = JSON.stringify(myJsObject);

console.log(typeof sendDateToServer); // string

console.log(sendDateToServer); // {"username":"Anwar Barakat","age":25}

/*
  Synchronous & Asynchronous : 

  Synchronous : 
  -	Operations runs sequentially.
  -	Each operation must wait the previous one to finish

  Asynchronous:
  -	Operations runs parallelly
  -	An operation can occur while another one is still run.
*/

/*
  Call Stack || Stack Trace: 
  -	Javascript Engine uses a Call Stack to manage excution contexts.
  -	Mechanism to make the Interpreter track your calls.
  -	When function called a function, will add it in the stack.
  -	When function excuted a function will removed it from the stack.
  -	Work using LIFO Principle => Last in First Out.
  - Call Stack detect web api methods and leave it to the browser to handle it
*/

setTimeout(() => {
  console.log("web api");
}, 0);

function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}
function three() {
  two();
  console.log("three");
}

three();

/* Stack  => LIFO
  =====================================
  =====================================
  =====================================
  =====================================
  function one() {
    console.log("one");
  }
  =====================================
  function two() {
    one();
    console.log("two");
  }
  =====================================
  function three() {
    two();
    console.log("three");
  }
  =====================================
*/

// three() excution
console.log("===============");
console.log("one");
console.log("two");
console.log("three");

// the output will be :  one tow three web api
