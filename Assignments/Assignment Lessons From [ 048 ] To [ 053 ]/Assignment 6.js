let start = 0;
let swappedName = "elZerO";
let result = [];

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swapped = swappedName[i].toLowerCase();
  }
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    swapped = swappedName[i].toUpperCase();
  }
  result.push(swapped);
}
console.log(result.join(""));

// Output
/* "ELzERo" */
