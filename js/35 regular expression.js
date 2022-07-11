/*
  Regular expression : 

  Modifier  => flags
  i         => case insensitive
  g         => global
  m         => multiline

  match return null if no match is found
*/

let myString = "Hello Elzero web School, elzero";

let regex1 = /elzero/;

console.log(myString.match(regex1)); // ['elzero', index: 25, input: 'Hello Elzero web School, elzero']

let regex2 = /elzero/i;

console.log(myString.match(regex2)); // ['Elzero', index: 6, input: 'Hello Elzero web School, elzero']

let regex3 = /elzero/gi;

console.log(myString.match(regex3)); // (2) ['Elzero', 'elzero']

/*
  Regular expression : 

  Ranges :
  (x|y)       => x or y
  [0-9]       => 0 to 9
  [^0-9]      => any character not from 0 to 9

  [a-z]       => a to z
  [^a-z]      => any character not from a to z
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/

let tld = "Com Net Org Info Code Io";

let tldRegex1 = /(org|info|io)/i;

console.log(tld.match(tldRegex1)); // (2) ['Org', 'Org', index: 8, input: 'Com Net Org Info Code Io']

let tldRegex2 = /(org|info|io)/gi;

console.log(tld.match(tldRegex2)); // (3) ['Org', 'Info', 'Io']

let nums = "12!3%%45^^^&&678910";

let numsRegex = /[0-5]/g;

console.log(nums.match(numsRegex)); // (7) ['1', '2', '3', '4', '5', '1', '0']

let notBinary = "123456701";

let binaryRegex = /[^0-2]/;

console.log(notBinary.match(binaryRegex)); // ['3', index: 2, input: '123456701']

let practice = "os1 os1os os2 os8 os8os";

let practiceRegex = /os[5-9]os/gi;

console.log(practice.match(practiceRegex)); // ['os8os']
