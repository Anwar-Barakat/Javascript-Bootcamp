/*
  What is callback : 
  a function that is passed into another one as an argument to 
  be executed later

  Example on callback hell
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

function sayHello() {
  console.log("hi");
}

let btn = (document.getElementById("button").onclick = makeItRed);

setTimeout(sayHello, 2000);

setTimeout(() => {
  console.log("Download Photo");

  setTimeout(() => {
    console.log("Resize Photo");

    setTimeout(() => {
      console.log("Add Logo");
      setTimeout(() => {
        console.log("Show them");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

/*
  Promise : 

  - Something that will happen in the future
  - promise avoid callback hell
  - promise is the object that represent the status of an asynchronous operation 
    and its resulting value

    Promise Status: 
    1-	Pending: Initial State.
    2-	Fulfilled: Completed Successfully.
    3-	Rejected: Failed.

*/

let myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;

  if (connect) resolveFunction("connection established");
  else rejectFunction(Error("connection failed"));
}).then(
  (resolveValue) => console.log(`good ${resolveValue}`),
  (rejectValue) => console.log(`good ${rejectValue}`)
);

console.log(myPromise); // good connection established

/*
  Promise : 

  then    => promise is successfully use the resolved data
  catch   => promise is failed, catch the error
  finally => promise successfully or failed so, do something

*/

const thePromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Anwar", "Ali", "Omar", "Mahmoud"];

  // the promise is coming true
  if (employees.length === 4) resolveFunction(employees);
  else rejectFunction(Error(`Number of employees aren't four`));
});

thePromise.then((resolveValue) => {
  resolveValue.length = 2;
  return resolveValue;
});

thePromise.then((resolveValue) => {
  resolveValue.length = 1;
  return resolveValue;
});

thePromise.then((resolveValue) => {
  console.log(`the employee name is ${resolveValue}`); // the employee name is Anwar
});

thePromise.catch((rejectedReason) => {
  console.log(`number of employees isn't four`);
});

thePromise.finally(console.log("that will be execute in any situation"));

/*
  Promise With XML
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();

    myRequest.onload = function () {
      if (myRequest.readyState === 4 && myRequest.status === 200) {
        resolve(JSON.parse(myRequest.responseText));
      } else {
        reject(Error("No data found"));
      }
    };

    myRequest.open("GET", apiLink);

    myRequest.send();
  });
};

getData("https://api.github.com/users/Anwar-Barakat/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name));
