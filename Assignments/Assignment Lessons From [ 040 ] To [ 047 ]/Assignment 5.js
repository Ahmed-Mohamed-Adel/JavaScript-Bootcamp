let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Solution 1
if (haystack.includes(needle)) {
  console.log("Found"); // Found
}

// Solution 2
if (haystack.includes(haystack[1])) {
  console.log("Found"); // Found
}

// Solution 3
if (haystack.includes(haystack.slice(0))) {
  console.log("Found"); // Found
}