let myRequest = new XMLHttpRequest();
myRequest.open("GET", "Assignment 1.json");
myRequest.send();

myRequest.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    let div = document.createElement("div");
    div.id = "data";
    for (let i = 0; i < mainData.length; i++) {
      let title = document.createElement("h2");
      let titleText = document.createTextNode(mainData[i].title);
      title.appendChild(titleText);

      let content = document.createElement("p");
      let contentText = document.createTextNode(mainData[i].content);
      content.appendChild(contentText);

      let author = document.createElement("p");
      let authorText = document.createTextNode(`Author: ${mainData[i].author}`);
      author.appendChild(authorText);

      let section = document.createElement("p");
      let sectionText = document.createTextNode(
        `Section: ${mainData[i].section}`
      );
      section.appendChild(sectionText);

      let data = document.createElement("div");
      data.appendChild(title);
      data.appendChild(content);
      data.appendChild(author);
      data.appendChild(section);

      div.appendChild(data);
      document.body.appendChild(div);
    }
  }
};
