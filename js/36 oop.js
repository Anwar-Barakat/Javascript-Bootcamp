/*
  OOP : 

  Construction Function
    - Dealing with properties and method
*/

//? new way to create constuctor :
class User {
  constructor(id, name, salary) {
    // props :
    this.user_id = id;
    this.username = name || "unknown";
    this.user_salary = salary < 6000 ? salary + 500 : salary;
    this.msg = () => {
      return `Hi ${this.username}, your salary is ${this.salary}`;
    };
  }

  // methods :
  sayHello() {
    return `Hi ${this.username}, your salary is ${this.salary}`;
  }
}

let firstUser = new User("1", "", 5000);
let secondUser = new User("2", "Belal", 6000);
let thirdUser = new User("3", "Ali", 7000);

console.log(firstUser.user_id); // 1
console.log(firstUser.username); // unknown
console.log(firstUser.user_salary); // 5500
console.log(firstUser.msg()); // Hi unknown, your salary is undefined

console.log(firstUser.sayHello()); // Hi unknown, your salary is undefined

/*
  OOP : 

  Inheritance
*/

class User1 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }

  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Ali");

// repeat your self 😑
// class Admin {
//   constructor(id, username, permission) {
//     this.i = id;
//     this.u = username;
//     this.p = permission;
//   }

//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// use inheritence :
class Admin extends User1 {
  constructor(id, username, permission) {
    super(id, username);
    this.p = permission;
  }
}

let admin = new Admin(1, "Anwar", "Admin");

console.log(admin.i); // 1
console.log(admin.u); // Anwar
console.log(admin.p); // Admin

class SuperAdmin {
  constructor(id, username, permission, ability) {
    super(id, username, permission);
    this.ab = ability;
  }
}
