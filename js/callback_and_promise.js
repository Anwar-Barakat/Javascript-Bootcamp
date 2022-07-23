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
  .then((result) => console.log(result[0].name)); // Anwar-Barakat

/*
  Fetch API :

  Return a representation of the entire http response

  fetch return promise
*/

fetch("https://api.github.com/users/Anwar-Barakat/repos")
  .then((result) => {
    let myData = result.json();
    console.log(myData); // Promise
    return myData;
  })
  .then((tenData) => {
    tenData.length = 10;
    return tenData;
  })
  .then((ten) => {
    console.log(ten[0].name); // Anwar-Barakat
  });

/*
  Promise method:
*/

let firstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res(`First Promise`);
  }, 1000);
});

let secondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej(`Second Promise`);
  }, 2000);
});

let thirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res(`Third Promise`);
  }, 1500);
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then(
  (resolvedValues) => {
    console.log(resolvedValues); // (3) ['First Promise', 'Second Promise', 'Third Promise']
  },
  (rejectedValue) => {
    console.log(`Promised Rejected is : ${rejectedValue}`); // Promised Rejected is : Second Promise
  }
);

Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then(
  (resolvedValues) => {
    console.log(resolvedValues);
    /*
      0: {status: 'fulfilled', value: 'First Promise'}
      1: {status: 'rejected', reason: 'Second Promise'}
      2: {status: 'fulfilled', value: 'Third Promise'}
    */
  },
  (rejectedValue) => {
    console.log(`Promised Rejected is : ${rejectedValue}`);
  }
);

Promise.race([firstPromise, secondPromise, thirdPromise]).then(
  (resolvedValues) => {
    console.log(resolvedValues); // First Promise
  },
  (rejectedValue) => {
    console.log(`Promised Rejected is : ${rejectedValue}`);
  }
);

/*
  Promise 
  async   => before the function mean this function return a promise
*/

async function getInfo() {
  let users = ["Anwar"];

  if (users.length > 0) return "Users found";
  else throw Error("No users yet");
}

console.log(getInfo());
/*
  Promise {<fulfilled>: 'Users found'}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "Users found"
*/

getInfo().then(
  (resolvedValue) => console.log(resolvedValue), // Users found
  (resjectedValue) => console.log(resjectedValue)
);

/*
  Promise
  await   :
  - work only inside async function
  - make javascript wait for the promise result
  - it is more elegant syntax of getting promise result
*/

const yourPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I am a good promise");
  }, 3000);
});

function readData() {
  console.log(`before promise`);
  yourPromise.then((resValue) => console.log(resValue)); // => after 3s will print "I am a good promise"
  console.log(`after promise`);
}
readData();

async function readInfo() {
  console.log(`before promise`);
  console.log(await yourPromise);
  console.log(`after promise`);
}
readInfo();

