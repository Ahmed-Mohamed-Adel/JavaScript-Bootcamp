// Start
let start = performance.now();

// Operation
for (let i = 0; i < 100000; i++) {
  document.write(`<div>${i}</div>`);
}

// End
let end = performance.now();

// Operation Duration
let duration = end - start;

console.log(`Loop Took ${Math.trunc(duration)} Milliseconds.`);

// Output
// "Loop Took 1921 Milliseconds." (Number may Change)
