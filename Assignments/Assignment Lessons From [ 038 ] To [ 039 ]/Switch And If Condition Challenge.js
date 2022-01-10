/*
Switch Chsllenge
*/

let job = "Manager";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}

/*
If Challenge
*/

let holidays = 0;
let money = 0;

//let holidays = 0;
if (holidays === 0) {
  money = 5000;
  console.log(`Money is ${money}`);
}

// let holidays = 1;
// let holidays = 2;
if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`Money is ${money}`);
}
// let holidays = 3;
else if (holidays === 3) {
  money = 3000;
  console.log(`Money is ${money}`);
}

// let holidays = 4;
else if (holidays === 4) {
  money = 1000;
  console.log(`Money is ${money}`);
}

// let holidays = 5;
else if (holidays === 5) {
  money = 0;
  console.log(`Money is ${money}`);
} else {
  money = 0;
  console.log(`Money is ${money}`);
}
