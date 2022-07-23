async function fetchData() {
  try {
    let myData = await fetch("data.json");
    let data = await myData.json();
    data.length = 5;
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("div");

      let title = document.createElement("h3");
      let titleTest = document.createTextNode(data[i].title);
      title.appendChild(titleTest);

      let description = document.createElement("p");
      let descriptionTest = document.createTextNode(data[i].description);
      description.appendChild(descriptionTest);

      div.appendChild(title);
      div.appendChild(description);

      document.body.appendChild(div);
    }
  } catch (error) {
    console.log(new Error("Data Not Found"));
  }
}

fetchData();