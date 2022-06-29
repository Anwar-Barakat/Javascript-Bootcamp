/*
  Switch Statement : 
  swithc(expression) { 
    case 1 : 
      Block code
      break;
    
    case 2 :
      Block code
      break;
      
    default :
      Block code
  }
*/

let day = 0; // saterday

switch (day) {
    default: console.log('the day is undefined');
    break;

    case 0:
            console.log('the day is Saturday');
        break;

    case 1:
            console.log('the day is Sunday');
        break;

    case 2:
            console.log('the day is Monday');
        break;

    case 3:
            console.log('the day is Tuseday');
        break;

    case 4:
            console.log('the day is Wedensday');
        break;

    case 5:
            console.log('the day is Thursday');
        break;

    case 6:
            console.log('the day is Friday');
        break;
}


/*
  Challenge : convert the switch statement to if statement
*/

let holidays = 3,
    money = 0;

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My money is ${money}`);
        break;

    case 1:
    case 2:
        money = 3000;
        console.log(`My money is ${money}`);
        break;

    case 3:
        money = 2000;
        console.log(`My money is ${money}`);
        break;

    default:
        money = 1000;
        console.log(`My money is ${money}`);
}

if (holidays == 0) {
    money = 5000;
    console.log(`My money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
    money = 3000;
    console.log(`My money is ${money}`);
} else if (holidays == 3) {
    money = 2000;
    console.log(`My money is ${money}`);
} else {
    money = 1000;
    console.log(`My money is ${money}`);
}