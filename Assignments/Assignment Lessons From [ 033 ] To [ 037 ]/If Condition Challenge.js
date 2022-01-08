// Challenge One
let a = 10;

if (a < 10) {
  console(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unkown");
}

// Write With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unkown");

// Challenge Two
let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

if (st.slice(-10, -9).toLowerCase() === "w") {
  console.log("Good");
}

if (typeof st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
