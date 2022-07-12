/*
  OOP : 

  Construction Function
*/

//? old way to create constuctor :
// function User(id, name, salary) {
//   this.user_id = id;
//   this.username = name;
//   this.user_salary = salary + 1000;
// }

//? new way to create constuctor :
class User {
  constructor(id, name, salary) {
    this.user_id = id;
    this.username = name;
    this.user_salary = salary + 1000;
  }
}

let firstUser = new User("1", "Anwar", 5000);
let secondUser = new User("2", "Belal", 6000);
let thirdUser = new User("3", "Ali", 7000);

console.log(firstUser.user_id); // 1
console.log(firstUser.username); // Anwar
console.log(firstUser.user_salary); // 6000

console.log(firstUser instanceof User); // true

console.log(firstUser.constructor === User); // true
