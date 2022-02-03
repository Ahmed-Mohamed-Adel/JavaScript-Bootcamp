let index = 10;
let jump = 2;
let end = 0;

let i = index;

for (;;) {
  if (i <= index) {
    console.log(i);
    if (i === (index - jump) / jump) break;
    i -= jump;
  }
}

// Output
10
8
6
4