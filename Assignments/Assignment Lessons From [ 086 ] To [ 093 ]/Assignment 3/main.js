let myInput = document.querySelector("input");
let firstSpan = document.querySelector("div").firstElementChild;
let lastSpan = document.querySelector("div").lastElementChild;

myInput.oninput = function () {
  firstSpan.textContent = myInput.value;
  lastSpan.textContent = (myInput.value * 15.6).toFixed(2);
};

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
};
