let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let newArr = [];

for (let i = +false; i < friends.length; i++) {
  if (friends[i][+false][+false] !== letter.toUpperCase()) {
    newArr.push(friends[i]);
  }
}
for (let j = +false; j < newArr.length; j++) {
  console.log(`${j + true} => ${newArr[j]}`);
}
/*
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/
