let specialNames = "Os10O OsO Os100O Os1000 Os100m";

let specialNamesRe = /Os\d*O/gi;

console.log(specialNames.match(specialNamesRe));

// Output
// ["Os10O", "OsO", "Os100O"]
