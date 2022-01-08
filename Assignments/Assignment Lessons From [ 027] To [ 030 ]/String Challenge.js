let a = "Elzero Web School";

// First Solution
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// Second Solution
console.log(
  a
    .substring(a.length - 4, a.length - 3)
    .toUpperCase()
    .repeat(8)
); // HHHHHHHH

// Third Solution
console.log(a.split(" ", 1)); // [Elzero]

// Fourth Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School

// Fifth Solution
console.log(
  `${a.charAt(0).toLowerCase()}${a.substr(1, 15).toUpperCase()}${a
    .substring(a.length - 1)
    .toLowerCase()}`
); // eLZERO WEB SCHOOl
