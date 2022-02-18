let checker = (zName) => (status) => (sallery) =>
  status === "Avillable"
    ? `${zName}, My Sallery Is ${sallery}`
    : `Iam Not Avillable`;

console.log(checker("Osama")("Avillable")(4000)); // My Sallery Is 4000
console.log(checker("Ahmed")("Not Avillable")(4000)); // Iam Not Avillable