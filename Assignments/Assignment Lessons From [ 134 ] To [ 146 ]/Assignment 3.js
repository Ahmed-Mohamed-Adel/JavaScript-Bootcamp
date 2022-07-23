let phone = "+(995)-123 (4567)";

let phoneRe = /\D*\d+\D*\d+\s*\D*\d+\D*/g;

console.log(phone.match(phoneRe));