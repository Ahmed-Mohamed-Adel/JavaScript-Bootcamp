let dateNow = new Date();
let birthday = new Date("Sep 19, 94");
let dateDiff = dateNow - birthday;

let seconds = dateDiff / 1000;
console.log(`${Math.trunc(seconds)} Seconds`);

let minutes = seconds / 60;
console.log(`${Math.trunc(minutes)} Minutes`);

let hours = minutes / 60;
console.log(`${Math.trunc(hours)} Hours`);

let days = hours / 24;
console.log(`${Math.trunc(days)} Days`);

let years = days / 365;
console.log(`${Math.trunc(years)} Years`);
