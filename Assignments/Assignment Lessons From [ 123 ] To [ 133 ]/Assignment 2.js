let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(Array.from(new Set(myFriends)).sort());

// Output
(4)["Ahmed", "Mahmoud", "Osama",  "Sayed"]