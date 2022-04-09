let myNum = document.querySelector("[name= 'elements']");
let myText = document.querySelector("[name= 'texts']");
let myType = document.querySelector("select");
let bgColor = document.getElementsByClassName("bgCol")[0];
let textColor = document.getElementsByClassName("teCol")[0];
let submit = document.querySelector("[name= 'create']");
let results = document.getElementsByClassName("results")[0];

myNum.oninput = () => (eleNum = myNum.value);
myText.oninput = () => (eleText = myText.value.trim());
myType.oninput = () => (eleType = myType.value);
bgColor.oninput = () => (eleCol = bgColor.value);
textColor.oninput = () => (eleTeCol = textColor.value);
document.forms[0].onsubmit = (e) => {
  e.preventDefault();
};

submit.onclick = function () {
  document.querySelectorAll(".results .box").forEach((box) => {
    box.remove();
  });
  myType.value === "Div" ? (eleType = "div") : (eleType = "section");

  for (let i = 0; i < eleNum; i++) {
    let newElement = document.createElement(eleType);
    let newText = document.createTextNode(eleText);
    newElement.className = "box";
    newElement.setAttribute("title", "Element");
    newElement.setAttribute("id", `id-${i + 1}`);
    newElement.setAttribute(
      "style",
      `background-color: ${eleCol};color: ${eleTeCol};`
    );
    newElement.appendChild(newText);
    results.appendChild(newElement);
  }
};
