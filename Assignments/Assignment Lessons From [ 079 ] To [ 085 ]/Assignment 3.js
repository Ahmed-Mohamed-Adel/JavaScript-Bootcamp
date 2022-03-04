let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a }, twoNums, threeNums);

console.log(finalObject);

/*
a: 1
b: 2
c: 3
d: 4
e: 5
f: 6
*/
