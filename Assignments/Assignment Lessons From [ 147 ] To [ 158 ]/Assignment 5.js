const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperty(myObj, "score", {
  writable: false,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(myObj, "id", {
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(myObj, "country", {
  writable: true,
  enumerable: true,
  configurable: true,
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Output
"username => Elzero"
"score => 1000"
{username: 'Elzero', score: 1000, id: 100}