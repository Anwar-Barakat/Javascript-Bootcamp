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

/*
  Date and Time :
  - setTime(millseconds)
  - setDate() => day of the month
  - setFullYear(year, month => [opt] from 0-11, days [opt] from 1-31)
  - setMonth(month => [opt] from 0-11, days [opt] from 1-31)
  - setHours(hours => from 0-23, minutes => [opt] from 0-59, seconds => [opt] from 0-59)
  - setMinutes(minutes => from 0-59, seconds => [opt] from 0-59)
*/

// dateNow.setTime(10); //  10 second from 1970

// console.log(dateNow); // Thu Jan 01 1970 02:00:00 GMT+0200

// dateNow.setDate(19); // we pass number of days

// console.log(dateNow); // Tue Jul 19 2022 20:53:42 GMT+0300

dateNow.setFullYear(2020);

console.log(dateNow); // Mon Jul 13 2020 20:58:13 GMT+0300

// console.log(Date.parse("Jul 3 1997")); // 867877200000

// console.log(Date.parse("7-3-1997")); // 867877200000

console.log(Date.parse("7/3/1997")); // 867877200000

let myBirthday = new Date(867877200000);

console.log(myBirthday); // Thu Jul 03 1997 00:00:00 GMT+0300
