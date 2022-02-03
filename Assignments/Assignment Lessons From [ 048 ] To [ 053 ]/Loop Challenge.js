let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samara"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

let showCount = 3;

document.write(`<div>We Have X Admins</div>`);

document.write(`<div>We Have ${showCount} Admins</div>`);
document.write(`<hr></hr>`);

for (let i = 0; i < showCount; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  let counter = 1;
  document.write(`<div>`);
  document.write(`The Admin for Team ${i + 1} Is ${myAdmins[i]}`);
  document.write(`<h3>Team Member: </h3>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.write(`<p> - ${counter++} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`</div>`);
  document.write(`<hr></hr>`);
}
