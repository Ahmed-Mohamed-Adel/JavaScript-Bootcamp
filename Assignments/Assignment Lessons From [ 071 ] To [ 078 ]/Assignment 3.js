let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flatArray = myArray
  .reduce(function (acc, current) {
    return acc.concat(current);
  }, [])
  .join("");

console.log(flatArray); // Elzero
