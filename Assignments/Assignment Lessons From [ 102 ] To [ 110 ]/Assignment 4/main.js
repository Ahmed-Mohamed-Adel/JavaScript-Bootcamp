let myDiv = document.querySelector("div");

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML == "0") {
    clearInterval(counter);
    window.open("https://Elzero.org");
  }
}, 1000);
