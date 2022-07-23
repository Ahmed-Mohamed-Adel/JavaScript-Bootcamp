let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

// Output
Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true