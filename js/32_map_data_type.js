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

