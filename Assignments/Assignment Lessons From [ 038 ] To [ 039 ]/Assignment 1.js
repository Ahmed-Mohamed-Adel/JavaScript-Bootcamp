let day = "  friday  "; // Remove Spaces And Make First Letter Capital

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
let day = "Monday";
let day = "Thursday";
let day = "Tuesday";
let day = "Wednesday";

let day = "World";

switch (`${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available"); // Output => "No Appointments Available"
    break;
  // let day = "Monday";
  // let day = "Thursday";
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM"); // Output => "From 10:00 AM To 5:00 PM"
    break;
  // let day = "Tuesday";
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM"); // Output => "From 10:00 AM To 6:00 PM"
    break;
  // let day = "Wednesday";
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM"); // Output => "From 10:00 AM To 7:00 PM"
    break;
  default:
    // let day = "World";
    console.log("Its Not A Valid Day"); // Output => "Its Not A Valid Day"
}
