/*
  assignment operator : 
*/

let A = 10;
console.log(A); // 10

A = 20;
console.log(A); // 20

A = A + 10;
console.log(A); // 30

A += 10;
console.log(A); // 40

A -= 10;
console.log(A); // 30

A /= 2;
console.log(A); // 15

A *= 3;
console.log(A); // 45


/*
  challenge : 
*/

let a = 10,
    b = "20",
    c = 80;

console.log(++a + +b++ + +c++ - +a++); // 100
/*
  ++a   = 11
  ++a + +b++  = 11 + 20
  ++a + +b++ + +c++  = 11 + 20 + 80
  ++a + +b++ + +c++ - +a++  = 11 + 20 + 80 - 11 
*/

console.log(++a + -b + +c++ - -a++); // 100
/*
  ++a = 13
  ++a + -b = 13 - 21
  ++a + -b + +c++ = 13 - 21 + 81
  ++a + -b + +c++ - -a++ = 13 - 21 + 81 + 13
  ++a + -b + +c++ - -a++ + +a = 13 - 21 + 81 + 13 + 13
*/