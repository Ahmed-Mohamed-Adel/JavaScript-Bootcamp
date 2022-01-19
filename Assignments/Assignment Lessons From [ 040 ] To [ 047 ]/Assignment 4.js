let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[words.length - words.indexOf("Facebook")][0]
    .slice(words.length - words.indexOf("Facebook"))
    .toUpperCase()
); // ZERO