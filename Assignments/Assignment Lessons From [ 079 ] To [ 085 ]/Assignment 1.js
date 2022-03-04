let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${member.name}, My Age Is ${member.age}, I Live In ${member.country}`;
  },
};

console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live In Egypt
