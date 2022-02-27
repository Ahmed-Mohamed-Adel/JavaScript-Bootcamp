let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNums = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele)) ? ele : "";
  })
  .map(function (ele) {
    return -ele;
  });

console.log(newNums); // [-1, -10, 10, 20, -3]
