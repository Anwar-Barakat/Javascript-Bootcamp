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
