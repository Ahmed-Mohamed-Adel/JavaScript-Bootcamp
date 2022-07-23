let myRequest = new XMLHttpRequest();
myRequest.open("GET", "Assignment 1.json");
myRequest.send();

myRequest.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    console.log("Data Loaded");
  }
};
