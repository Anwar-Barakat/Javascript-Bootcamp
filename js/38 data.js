/*
  Date and Time

  1 second = 1000 mill second
*/

let dateNow = new Date();

console.log(dateNow); // Wed Jul 13 2022 20:36:01 GMT+0300

console.log(Date.now()); // 1657733848035 => from 1970

let seconds = Date.now() / 1000;

let minutes = seconds / 60;

let hours = minutes / 60;

let days = hours / 24;

let years = days / 365; // around 52 years
