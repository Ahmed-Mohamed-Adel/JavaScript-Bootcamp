let theName = document.querySelector(".name");
let theAge = document.querySelector(".age");
let country = document.querySelector(".country");
let skills = document.querySelector(".skills");

if (sessionStorage.length > 0) {
  theName.value = sessionStorage.getItem("theName", theName.value);
}
if (sessionStorage.length > 0) {
  theAge.value = sessionStorage.getItem("theAge", theAge.value);
}
if (sessionStorage.length > 0) {
  country.value = sessionStorage.getItem("country", country.value);
}
if (sessionStorage.length > 0) {
  skills.value = sessionStorage.getItem("skills", skills.value);
}

theName.oninput = () => {
  window.sessionStorage.setItem("theName", theName.value);
};

theAge.oninput = () => {
  window.sessionStorage.setItem("theAge", theAge.value);
};

country.oninput = () => {
  window.sessionStorage.setItem("country", country.value);
};

skills.onchange = () => {
  window.sessionStorage.setItem("skills", skills.value);