let aar1 = ["A", "C", "X"];
let aar2 = ["D", "E", "F", "Y"];
let allArrs = aar1.concat(aar2).sort().join("").toLowerCase().slice(-3);

console.log(allArrs); // fxy