// Create Elements
let myDiv = document.createElement("div");
let myHead = document.createElement("h2");
let myPara = document.createElement("p");
let myButton = document.createElement("button");

let textHead = document.createTextNode("Welcome");
myHead.appendChild(textHead);

let textPara = document.createTextNode("Welcome To Elzero Web School");
myPara.appendChild(textPara);

let textButton = document.createTextNode("x");
myButton.appendChild(textButton);

myDiv.appendChild(myHead);
myDiv.appendChild(myPara);
myDiv.appendChild(myButton);

// Style
document.body.style.cssText =
  "font-family: Tohama, Arial; display: flex; justify-content: center; align-items: center; text-align: center;";
myDiv.style.cssText =
  "position: relative; transform: translateY(50%); font-size: 15px;background-color: #F5F3F4; padding : 40px; padding: 20px 100px;";
myPara.style.cssText = "font-size: 15px;";
myButton.style.cssText =
  "position: absolute; left: 96%; top: -9px; border: 2px solid white; border-radius: 50%; background-color: red; width: 30px; height: 30px; font-size: 17px; color: white; font-weight: bold;";

// Popup Function
setTimeout(function () {
  document.body.appendChild(myDiv);
}, 5000);

myButton.onclick = function () {
  myDiv.remove();
};
