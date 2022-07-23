let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

chars.sort();

chars.copyWithin(0, 3, 6);

console.log(chars);

// Output
["A", "B", "C", "A", "B", "C", "D", "E"]


let chars = ["A", "B", "C", 20,"D", "E", 10, 15, 6];

chars.sort();

chars.copyWithin(0, 4, 8);

console.log(chars);

// Output
["A", "B", "C", "D", "A", "B", "C", "D", "E"]


let chars = ["Z", "Y", "A","D", "E", 10, 1];

chars.copyWithin(2);

console.log(chars);

// Output
["Z", "Y", "Z", "Y", "A", "D", "E"]