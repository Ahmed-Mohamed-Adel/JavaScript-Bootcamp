function calculate(fristNum, secoundNum = "Unkown", operation = "Unkown") {
    operation === "add"
      ? console.log(fristNum + secoundNum)
      : operation === "subtract"
      ? console.log(fristNum - secoundNum)
      : operation === "multiply"
      ? console.log(fristNum * secoundNum)
      : operation === "Unkown" && secoundNum === "Unkown"
      ? console.log("Second Number Not Found")
      : console.log(fristNum + secoundNum);
  }
  
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, "add"); // 50
  calculate(20, 30, "subtract"); // -10
  calculate(20, 30, "multiply"); // 600