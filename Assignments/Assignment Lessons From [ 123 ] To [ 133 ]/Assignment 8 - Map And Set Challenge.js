let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(
  Number(
    [
      ...new Set(
        Array.from(
          [...new Set(n1, n2)].pop().toString().concat(n1.shift().toString())
        )
          .sort()
          .reverse()
      ),
    ].join("")
  )
); // 210