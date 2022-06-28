/*
  comparison operators : 
  =         => assignment operator
  
  1-  ==    => equal 
  2-  !=    => not equal
  
  3-  ===   => identical
  4-  !==   => not identical

  5-  >     => larger than
  6-  >=    => larger than or equal

  5-  <     => smaller than
  6-  <=    => smalle than or equal
*/

console.log(20 == "20") // true   => comparison only on the value
console.log(-200 == "-200") // true

console.log(-200 != "-20") // true
console.log(-20 != "-20") // false

console.log(20 === "20") // false   => comparison on the value and type
console.log(20 !== "20") // true    => value is true, but the type is not identical so it is false

console.log(10 > 10) // false
console.log(10 >= 10) // true


// interview question : 
console.log("Anwar" === "Ali"); // false , i wanna it true
console.log(typeof("Anwar") === typeof("Ali")) // true



/*
  !   => not
  &&  => and 
  ||  => or 
*/

console.log(true) // true
console.log(!true) // false
console.log(!(10 == "10")) // false

console.log(10 == "10" && 10 == "10") // true
console.log(10 == "10" && 10 === "10") // false

console.log(10 == "10" || 10 === "10") // true