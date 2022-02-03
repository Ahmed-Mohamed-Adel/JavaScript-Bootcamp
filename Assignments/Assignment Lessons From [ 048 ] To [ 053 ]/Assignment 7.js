let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = +true; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  }
  console.log(mix[i]);
}

/*
// Output
2
3
4
*/
