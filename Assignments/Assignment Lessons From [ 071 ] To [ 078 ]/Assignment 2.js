let myString = "EElllzzzzzzzeroo";

let removeDuplicate = myString
  .split("")
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(removeDuplicate); // Elzero
