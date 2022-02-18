function specialMix(...data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      data[i] = parseInt(data[i]);
      if (!isNaN(data[i])) {
        result += data[i];
      } else {
        continue;
      }
    }
    if (result === 0) {
      return `All Is String`;
    }
    return result;
  }
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 30
  console.log(specialMix("Test", "Cool", "Test")); // All Is String