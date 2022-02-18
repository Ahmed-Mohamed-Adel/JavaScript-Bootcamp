// Challenge One
let names = function (...names) {
  return `String [${names.join("], [")}] => Done !`;
};

// Arrow Function
let names = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Moahmed], [Ali], [Ibrahim] => Done !

// Challenge Two
let myNumbers = [20, 50, 10, 60];

let calc = function (one, two, ...nums) {
  for (let i = 0; i < nums.length; i++) {
    let result = 0;
    if (nums[i] === 50) {
      result = one + two + nums[i];
      return result;
    }
  }
};

// Arrow Function
let calc = (one, two, ...nums) => {
  for (let i = 0; i < nums.length; i++) {
    let result = 0;
    if (nums[i] === 50) {
      result = one + two + nums[i];
      return result;
    }
  }
};

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80
