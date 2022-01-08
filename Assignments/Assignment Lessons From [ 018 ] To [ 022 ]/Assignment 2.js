let a = 3;

// Solution One
console.log(a + a); // 6
// Solution Two
console.log(+"3" + a); // 6
// Solution Three
console.log(-"-18" / a); // 6
// Solution Four
console.log(true + a + +"2"); // 6
// Solution Five
console.log(+"10" - (a + true)); // 6
// Solution Six
console.log(++a + -"-2"); // 6
