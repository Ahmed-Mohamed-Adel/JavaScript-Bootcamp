let promptNum = prompt("Print Number From - To", "Example: 5-20");

let counter = promptNum.split("-").sort((a, b) => a - b);

let count = setInterval(function () {
  let myDiv = document.createElement("div");
  myDiv.innerHTML = counter[0]++;
  if (myDiv.innerHTML == counter[1]) {
    clearInterval(count);
  }
  document.body.appendChild(myDiv);
}, 0);

/*
// 10-15

10
11
12
13
14
15

// 20-10

10
11
12
13
14
15
16
17
18
19
20
*/
