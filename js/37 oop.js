/*
  OOP 

  Encapsulation
*/

class User {
  // private props :
  #salary;

  constructor(id, username, expectedSalary) {
    this.user_id = id;
    this.username = username;
    this.#salary = expectedSalary;
  }

  // method :
  getSalary() {
    return parseInt(this.#salary);
  }
}

let user1 = new User(1, "Anwar", "5000 dollars");

console.log(user1.getSalary()); // 5000
