let myDiv = document.querySelector("div")
let myP = document.querySelector("p");

myP.remove();

// Create Div Before myDiv
let StartDiv = document.createElement("div");
StartDiv.className = "start";
StartDiv.title = "Start Element";
StartDiv.setAttribute("data-value", "Start");
StartDiv.textContent = "Start";

myDiv.before(StartDiv)

// Create Div after myDiv
let endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.setAttribute("data-value", "End");
endDiv.textContent = "End";

myDiv.after(endDiv);