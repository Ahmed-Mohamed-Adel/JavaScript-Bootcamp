let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newArr = mix
  .map(function (ele) {
    return typeof ele === "string" ? ele : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(newArr); // Elzero
