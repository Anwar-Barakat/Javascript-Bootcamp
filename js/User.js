/*
  OOP 

  Prototype 
  - Add to prototype chain
  - Extend built in constuctor features
*/

class User {
  constructor(id, username) {
    this.user_id = id;
    this.username = username;
  }

  sayHello() {
    return `Hello ${this.username}`;
  }
}

let user1 = new User(1, "Anwar");

console.log(User.prototype);

User.prototype.sayWelcome = function () {
  return `Welcome ${this.username}`;
};

Object.prototype.love = "Javascript";

String.prototype.addDotBeforeAndAfter = function () {
  return `.${this}.`;
};

let myString = "Anwar Barakat";

console.log(myString.addDotBeforeAndAfter()); // .Anwar Barakat.

/*
  Object Meta Data And Descriptor

  the default values of it are false 
*/

const myOb = {
  a: 1,
  b: 2,
};

Object.defineProperty(myOb, "c", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 3,
});

console.log(myOb.c); // 3

// change the "c" value
myOb.c = 100;

console.log(myOb.c); // 100

// if writable : false we can't change it
myOb.c = 100;

console.log(myOb.c); // 3

// looping :
for (const prop in myOb) {
  console.log(`${prop} , ${myOb[prop]}`);
}

// if enumerable : false , c will go out the looping

// we can also delete object property :
console.log(delete myOb.c); // true

// if configurable : false we can't delete this prop or redefine "c" property

Object.defineProperties(myOb, {
  d: {
    writable: true,
    value: 5,
  },
  e: {
    enumerable: true,
    value: 6,
  },
  f: {
    configurable: false,
    value: 7,
  },
});
