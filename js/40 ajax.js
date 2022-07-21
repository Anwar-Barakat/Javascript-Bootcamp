/*
  AJAX :

  -	Asynchronous Javascript And XML.
  -	An Approach to use several technologies together [ HTML – CSS – JS ].
  -	It use “ XMLHttpRequest ”object to interact with the sever.
  -	You can fetch and send data without page refresh.


  Ready State   	=> status of the request
  0	  => request not initialized
  1	  => server connection established
  2	  => request received
  3	  => Processing request
  4	  => request is finished and response is ready

  Status : 
  200 => response is successful
  404 => not found

*/

let myRequest = new XMLHttpRequest();

myRequest.open("GET", "https://api.github.com/users/Anwar-Barakat/repos", true);

myRequest.send();

console.log(myRequest);

myRequest.onreadystatechange = () => {
  console.log(myRequest.readyState);

  console.log(myRequest.status);

  if (myRequest.readyState === 4 && myRequest.status === 200) {
    console.log(myRequest.responseText);

    let myData = JSON.parse(myRequest.responseText);

    console.log(myData);

    for (let i = 0; i < myData.length; i++) {
      let myDiv = document.createElement("div");

      let repoName = document.createTextNode(myData[i].full_name);

      myDiv.appendChild(repoName);

      document.body.appendChild(myDiv);
    }
  }
};
