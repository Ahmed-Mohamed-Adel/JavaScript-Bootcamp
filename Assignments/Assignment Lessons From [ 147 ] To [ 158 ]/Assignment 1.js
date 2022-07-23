class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}

let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("BMW", 2022, 650000);
let carThree = new Car("mercedes", 2022, 970000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);
console.log(carOne.run());

// Output
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
