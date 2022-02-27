let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,0,Z";

let solution = myString
  .split(",")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele === "_"
      ? " "
      : ele && ele === myString[myString.length - true]
      ? ""
      : ele[ele.length - ele.length];
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(solution); // Elzero Web School