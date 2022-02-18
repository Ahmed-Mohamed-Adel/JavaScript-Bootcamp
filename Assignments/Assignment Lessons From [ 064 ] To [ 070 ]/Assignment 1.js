function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `Hello ${zName.slice(0, 7)}.`;
  }

  function ageWithMessage(zAge) {
    return `Your Age Is ${zAge.slice(0, 2)}`;
  }

  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Moahmed", "38 Is My Age", "Egypt"));
// Hello Osama M. Your Age Is 38 You Live In EG
console.log(getDetails("Ahmed Ali", "32 Is My Age", "Syria"));
// Hello Ahmed A. Your Age Is 32 You Live In SY
