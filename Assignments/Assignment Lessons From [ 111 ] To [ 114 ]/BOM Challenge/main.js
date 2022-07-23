let container = document.querySelector(".container");
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let arrayOfTasks = [];

// CSS Text
document.body.style.cssText = "font-family: sans-serif;";

container.style.cssText =
  "margin: 10px auto; width: 385px; background-color: rgb(244, 245, 244); padding: 13px; border-radius: 3px; position: relative;";

input.style.cssText =
  "border: none; outline: none; padding: 5px; width: 300px; height: 12px; margin-right: 5px; border-radius: 4px;";
add.style.cssText =
  " background-color: #f44336; color: white; border: none; padding: 5px; font-size: lOpx; border-radius: 4px; cursor: pointer;";
tasks.style.cssText =
  "margin: 10px auto; width: 400px; background-color: #f4f5f4; padding: 7px; border-radius: 3px; position: absolute; top: 60px; left: -2px;";

// Challenge Code
add.addEventListener("click", function (e) {
  if (input.value == "") {
    e.preventDefault();
  } else {
    let content = document.createElement("div");
    let newElem = document.createElement("div");
    let textElem = document.createTextNode(input.value);
    let btn = document.createElement("button");
    let textBtn = document.createTextNode("Delete");

    // Append
    tasks.appendChild(content);
    content.appendChild(newElem);
    newElem.appendChild(textElem);
    content.append(btn);
    btn.appendChild(textBtn);

    const newTask = {
      id: Date.now(),
      title: newElem.innerHTML,
    };
    // push newTask on arrayOfTask
    arrayOfTasks.push(newTask);
    // Local Storage
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
    // Css Text
    content.style.cssText =
      "display: flex; justify-content: space-between; background-color: white; border-radius: 4px; height: 13px; padding: 8px; line-height: 1; margin: 9px 9px;";
    btn.style.cssText =
      "border: none; background-color: red; color: white; font-size: 8px; font-weight: bold; width: fit-content; border-radius: 3px; cursor: pointer;";
    // Delete Button
    btn.onclick = () => {
      content.remove();
      window.localStorage.removeItem("tasks");
    };
  }
  input.value = "";
});
