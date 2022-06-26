/*
  string syntax + character escape sequences : 
 \  => escape or line continue
 \n => new line 
*/

console.log('Anwar web "developer"'); // Anwar web developer
console.log("Anwar web 'developer'"); // Anwar web developer
console.log('Anwar web \'developer\''); // Anwar web developer
console.log("Anwar web \"developer\""); // Anwar web developer
console.log("Anwar \\ web \"developer\""); // Anwar \ web developer
console.log("Anwar\
  web\
  developer"); // Anwar  web developer

console.log("Anwar \n web \n developer");
/*
Anwar 
web 
developer
*/


/*
  concatenation : 
*/

let a = "Anwar";
let b = "web developer";

document.write(a + b); // Anwarweb developer
document.write("<br>");
document.write(a + " " + b); // Anwarweb developer


/*
  template literals (template string) : 
*/

let c = "we love",
    d = "javascript",
    e = "and",
    f = "programming";

console.log(c + " " + d + " " + e + " " + f); // we love javascript and programming

console.log(`${c} ${d} ${e} ${f}`); // we love javascript and programming
console.log(`${c} 
${d} 
${e} 
${f}`);
/*
we love 
javascript 
and 
programming
*/

// example:

let title = "Anwar";
let description = "web developer";

let markup = `
<div class="card">
  <div class="child">
    <h3>${title}</h3>
    <p>${description}</p>
  </div>
</div>
`;

document.write(markup)