/*
  BOM (Browser Object Model)

  alert(message)    => Bad to use
  confirm(message)  => Bad to use
  prompt(message)   => Bad to use 
  because they stop the website
  we just waana know they are exsits but we don't use them
*/

window.alert('Hello');
this.alert('Hello');
alert('Hello');

confirm('Are you need to delete ?')

let theDay = prompt('Suitable day for you ?')

if(theDay){
  console.log(theDay)
}