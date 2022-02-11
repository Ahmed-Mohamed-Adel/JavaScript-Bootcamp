function checkStatus(a, b, c) {
  let myParams = [a, b, c];
  let name, age, hire;
  for (let i = 0; i < myParams.length; i++) {
    typeof myParams[i] === "string"
      ? (name = myParams[i])
      : typeof myParams[i] === "number"
      ? (age = myParams[i])
      : (hire = myParams[i]);
  }
  if (hire === true) {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Avilable For Hire`);
  } else {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Not Avilable For Hire`
    );
  }
}
checkStatus("Osama", 38, true); // Hello Osama, Your Age Is 38, You Are Avilable For Hire
checkStatus(38, "Osama", true); // Hello Osama, Your Age Is 38, You Are Avilable For Hire
checkStatus(true, 38, "Osama"); // Hello Osama, Your Age Is 38, You Are Avilable For Hire
checkStatus(false, "Osama", 38); // Hello Osama, Your Age Is 38, You Are Not Avilable For Hire