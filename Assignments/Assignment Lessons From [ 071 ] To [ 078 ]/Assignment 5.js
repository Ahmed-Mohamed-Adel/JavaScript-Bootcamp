let nums = [2, 12, 11, 5, 10, 1, 99];

let reducedNums = nums.reduce(function (acc, current) {
  return current % 2 === 1 ? acc + current : acc * current;
}, 1);

console.log(reducedNums); // 500
