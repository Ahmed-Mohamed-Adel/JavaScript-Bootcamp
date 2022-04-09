let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let currentElem = document.getElementsByClassName("element current")[0];
let myDiv = document.querySelector(".classes-list div");

function showClasslist() {
  if (currentElem.classList.value === "") {
    myDiv.innerHTML = "No Classes To Show";
  } else {
    currentElem.classList.value
      .split(" ")
      .sort()
      .map((c) => {
        let mySpan = document.createElement("span");
        mySpan.innerHTML = c;
        myDiv.appendChild(mySpan);
      });
  }
}

addClass.onblur = () => {
  const wordsToAdd = addClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsToAdd.length; i++) {
    currentElem.classList.add(wordsToAdd[i]);
    let span = document.createElement("span");
    span.textContent = wordsToAdd[i];
    myDiv.appendChild(span);
  }
  addClass.value = "";
};

removeClass.onblur = () => {
  const wordsToRemove = removeClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsToRemove.length; i++) {
    currentElem.classList.remove(wordsToRemove[i]);
    for (let j = 0; j < myDiv.children.length; j++) {
      if (myDiv.children[j].textContent === wordsToRemove[i]) {
        myDiv.removeChild(myDiv.children[j]);
      }
    }
  }
  removeClass.value = "";
  showClasslist();
};