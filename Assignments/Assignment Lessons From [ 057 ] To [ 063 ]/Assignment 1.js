function sayHello(theName, theGender) {
  theGender === "Male"
    ? console.log(`Hello Mr ${theName}`)
    : theGender === "Female"
    ? console.log(`Hello Mrs ${theName}`)
    : console.log(`Hello ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // Hello Mr Osama
sayHello("Eman", "Female"); // Hello Mrs Eman
sayHello("Sameh"); // Hello Sameh
