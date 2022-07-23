let fonts = document.querySelector(".fonts");
let color = document.querySelector(".color");
let fontSize = document.querySelector(".font-size");

if (window.localStorage.length > 0) {
  document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
}
if (window.localStorage.length > 0) {
  document.body.style.color = window.localStorage.getItem("Color");
}
if (window.localStorage.length > 0) {
  document.body.style.fontSize = window.localStorage.getItem("fontSize");
}

fonts.onchange = () => {
  window.localStorage.setItem("fontFamily", fonts.value);
  document.body.style.fontFamily = fonts.value;
};

color.onchange = () => {
  window.localStorage.setItem("Color", color.value);
  document.body.style.color = color.value;
};

fontSize.onchange = () => {
  window.localStorage.setItem("fontSize", fontSize.value);
  document.body.style.fontSize = fontSize.value;
};
