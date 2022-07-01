/*
  Arrow vs Regular Function
*/

let print_0 = function() {
    return "Anwar";
}

let print_1 = () => {
    return "Anwar";
}

let print_2 = _ => "Anwar";

let print_3 = (noun) => {
    return noun;
}

let print_4 = (noun) => noun;

// only one parameter we can remove ()
let print_5 = noun => noun;

let print_6 = function(num1, num2) {
    return num1 + num2;
}

let print_7 = (num1, num2) => num1 + num2;

console.log(print_0()); // Anwar
console.log(print_1()); // Anwar
console.log(print_2()); // Anwar
console.log(print_3('Anwar')); // Anwar
console.log(print_4('Anwar')); // Anwar
console.log(print_5('Anwar')); // Anwar
console.log(print_6(10, 20)); // 30
console.log(print_7(10, 20)); // 30