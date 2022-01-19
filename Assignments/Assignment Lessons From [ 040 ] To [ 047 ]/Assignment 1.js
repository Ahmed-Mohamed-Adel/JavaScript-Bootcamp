myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();

console.log(myFriends); // ["Ahmed", "Elham", "Osama"]

// Method 2
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"]