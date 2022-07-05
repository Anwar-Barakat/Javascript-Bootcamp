/*
  BOM : 
  history object
*/

// to get the number of history pages i already open it.
console.log(window.history); 

// to go forward :
console.log(window.history.forward()); 

// to return back :
console.log(window.history.back()); 

// go between the pages using index : 
/*
  0           => current page
  1,2,3..     => forward page
  -1,-2,-3..  => backward page
*/
console.log(window.history.go(0));