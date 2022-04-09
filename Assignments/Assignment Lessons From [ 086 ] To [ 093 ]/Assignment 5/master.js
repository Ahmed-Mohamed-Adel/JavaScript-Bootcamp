let myImgs = document.images;

for (let i = 0; i <= imgs.length; i++) {
  if (myImgs[i].hasAttribute("alt")) {
    myImgs[i].setAttribute("alt", "Old");
  } else {
    myImgs[i].setAttribute("alt", "Elzero New");
  }
}
