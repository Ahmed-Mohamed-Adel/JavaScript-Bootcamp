let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.splice(my.indexOf("Gamal"));

console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(my.indexOf("Elham"), counter)); // ["Elham", "Mazero"]

my.pop();
my.shift();

console.log(
  `${my[zero].slice(zero, counter - my.indexOf("Mazero"))}${my[
    my.indexOf("Mazero")
  ].slice(counter - my.indexOf("Mazero"))}`
); // "Elzero"

console.log(
  `${my[my.indexOf("Mazero")].slice(
    -(counter - my.indexOf("Mazero")),
    -my.indexOf("Mazero")
  )}${my[my.indexOf("Mazero")].slice(-my.indexOf("Mazero")).toUpperCase()}`
); // "rO"
