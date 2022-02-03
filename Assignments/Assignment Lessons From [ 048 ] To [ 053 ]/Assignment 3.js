let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = breaker; j <= end; j++) {
    if (j === breaker + start) continue;
    console.log(`-- ${j}`);
    if (j === end - breaker) break;
  }
}


// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
