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
