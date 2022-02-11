function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge * 12} => Months`);
    console.log(`${theAge * 48} => Weeks`);
    console.log(`${theAge * 365} => Days`);
    console.log(`${theAge * 8760} => Hours`);
    console.log(`${theAge * 525600} => Minutes`);
    console.log(`${theAge * 31536000} => Seconds`);
  } else {
    console.log(`Age Out Of Range`);
  }
}
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 465 Months
