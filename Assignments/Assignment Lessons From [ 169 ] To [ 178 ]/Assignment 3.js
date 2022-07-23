let myRequest = new XMLHttpRequest();
myRequest.open("GET", "Assignment 1.json");
myRequest.send();

myRequest.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].section = "All";
    }
    console.log(mainData);
    let updataDate = JSON.stringify(mainData);
    console.log(updataDate);
  }
};
