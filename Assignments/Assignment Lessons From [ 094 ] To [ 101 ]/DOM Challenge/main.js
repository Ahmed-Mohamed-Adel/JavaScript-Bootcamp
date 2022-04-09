// Body
document.body.style.cssText =
  "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tohama, Arial;";

// Header
let header = document.createElement("header");
header.classList.add("website-head");
header.style.cssText =
  "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;";

let divLogo = document.createElement("div");
divLogo.className = "logo";
logoText = document.createTextNode("Elzero");
divLogo.appendChild(logoText);
divLogo.setAttribute("title", "website Logo");
divLogo.style.cssText = "font-weight: bold; color:rgb(35, 169, 110);";
header.prepend(divLogo);

let ulMenu = document.createElement("ul");
ulMenu.className = "menu";
ulMenu.style.cssText =
  "padding: 0px; margin: 0px; display: flex; list-style: none;";
header.append(ulMenu);
texts = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < texts.length; i++) {
  let links = document.createElement("li");
  links.textContent = texts[i];
  links.style.cssText =
    "font-size: 14px; font-weight: bold; margin-left: 10px; color: #777;";
  ulMenu.append(links);
}

document.body.prepend(header);

//Content
let divContent = document.createElement("div");
divContent.className = "content";
divContent.style.cssText =
  "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";

for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  proText = document.createTextNode("Product");
  product.appendChild(proText);
  product.style.cssText =
    "padding: 20px; background-color: rgb(288, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";

  let span = document.createElement("span");
  span.textContent = `${i}`;
  span.style.cssText =
    "font-size: 40px; color: black; font-weight: normal; display: block; margin-botton: 10px; margin-top: 10px;";
  product.prepend(span);
  divContent.appendChild(product);
}

document.body.append(divContent);

// Footer
let footer = document.createElement("footer");
footer.className = "footer";
footerText = document.createTextNode("Copyright 2022");
footer.appendChild(footerText);
footer.style.cssText =
  "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);";
document.body.append(footer);

// Script
let script = document.querySelector("script");
document.body.append(script);
