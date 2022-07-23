let theName = "Elzero";

console.log(theName.split(""))
console.log([...new Set(theName)]);
console.log(Array.from(theName))
console.log([...theName])
console.log(Object.assign([], theName))

// Output
['E', 'l', 'z', 'e', 'r', 'o']