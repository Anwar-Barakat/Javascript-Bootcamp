/*
  Map Data Type :
*/

let myNewObject = {
  10: "number",
  10: "string",
};
console.log(myNewObject[10]); // string => because overrideing
console.log(myNewObject["10"]); // string => because overrideing

let myNewMap = new Map();

// addition :
myNewMap.set(10, "number");
myNewMap.set("10", "string");

console.log(myNewMap.get(10)); // number =>
console.log(myNewMap.get("10")); // string =>

console.log(myNewObject); // {10: 'string'}
console.log(myNewMap); // Map(2) {10 => 'number', '10' => 'string'}

console.log(myNewMap.size); // 2

myNewMap.set(true, "boolean");
myNewMap.set({ address_1: "damas", address_2: "yabroud" }, "object");
myNewMap.set(function sayHello() {}, "function");

/*
  Map vs WeakMap : 

  Map       => key can be anything 
  WeakMap   => key can Be exclusively object
*/

let mapUser = { theName: "Anwar" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

console.log(myMap); // Map(1) {{…} => 'Object Value'}

let weakMapUser = { theName: "Anwar" };

let myWeakMap = new WeakMap();

myWeakMap.set(weakMapUser, "Object value");

myWeakMap.set("Name", "Object value"); //  Invalid value used as weak map key
