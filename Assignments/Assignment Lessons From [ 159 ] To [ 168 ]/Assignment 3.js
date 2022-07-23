let dateNow = new Date();

dateNow.setDate(0);

console.log(dateNow);

// Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "The month and time are changed so that the output is not the same"

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(
  `Previous Month Is ${months[5]} And Last Day Is ${dateNow.getDate()}`
);

// Outopt
// "Previous Month Is April And Last Day Is 30"
// "The month is changed so that the output is not the same"
