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