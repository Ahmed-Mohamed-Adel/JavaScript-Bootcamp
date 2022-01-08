let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Number.parseInt(Math.min(a, b, c, d))); // Smallest Number and Integer

console.log(Math.pow(a, Math.trunc(d))); // 10000

console.log(Number.parseInt(d)); // 2
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2

console.log((Number.parseInt(b) / Math.ceil(d)).toFixed(2).toString()); // 66.67 => String
console.log(Math.round(Number.parseInt(b) / Math.ceil(d))); // 67 => Number
