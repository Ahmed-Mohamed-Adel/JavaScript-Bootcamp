let myDiv = document.querySelector("div");

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML == "5") {
    window.open(
      "https://Elzero.org",
      "_blank",
      "width= 400, height= 400, left= 200, top= 5"
    );
  }
  if (myDiv.innerHTML == "0") {
    clearInterval(counter);
  }
}, 1000);
