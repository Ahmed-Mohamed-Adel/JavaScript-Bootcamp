let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [obj1, obj2, obj3] = myFriends;

// If chosen === 1
if (chosen === 1) {
  let {
    title: a,
    age: b,
    available: c,
    skills: [, d],
  } = obj1;
  console.log(a);
  console.log(b);
  console.log(c ? "Available" : "Not Available");
  console.log(d);
}

/*
Output =>
Osama
39
Available
CSS
*/

// If chosen === 2
if (chosen === 2) {
  let {
    title: a,
    age: b,
    available: c,
    skills: [, d],
  } = obj2;
  console.log(a);
  console.log(b);
  console.log(c ? "Available" : "Not Available");
  console.log(d);
}

/*
Output =>
Ahmed
25
Not Available
Django
*/

// If chosen === 3
if (chosen === 3) {
  let {
    title: a,
    age: b,
    available: c,
    skills: [, d],
  } = obj3;
  console.log(a);
  console.log(b);
  console.log(c ? "Available" : "Not Available");
  console.log(d);
}

/*
Output =>
Sayed
33
Available
Laravel
*/
