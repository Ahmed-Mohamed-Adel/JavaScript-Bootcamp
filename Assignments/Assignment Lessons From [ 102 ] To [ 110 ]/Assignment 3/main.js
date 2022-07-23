let myDiv = document.querySelector("div");

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML == "0") {
    clearInterval(counter);
  }
}, 1000);
