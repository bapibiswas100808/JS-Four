//  1. Type Conversion
// const inputNumber = "7500";
// console.log(inputNumber + 10);
// console.log(inputNumber);
// console.log(Number(inputNumber), inputNumber);
// console.log(typeof inputNumber);
// const birthYear = 1991;
// console.log(birthYear);
// console.log(String(birthYear));
// const firstName = "Adrita";
// console.log(Number(firstName));
// console.log(Boolean(inputNumber));
// console.log(Boolean(firstName));

// 2.Type Coercion
// let bookNumber = 5;
// console.log("I have " + bookNumber + " story book!");
// console.log("20" - 5);
// console.log("20" + 5);
// console.log("30" / 6);
// console.log("30" * 4);
// console.log("20" - "5");
// console.log(5 + 10 + 5 + "5");
// console.log("100" - "50" + "10");
// console.log("15" - "5" - "4" - 3 + "5");

// 3.Truthy and falsy value
// Falsy Value
// 0;
// ("");
// null;
// undefined;
// NaN;
// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean("Adrita"));
// console.log(Boolean(1));
// console.log(Boolean("1"));
// const job = 0;
// if (job) {
//   console.log("I have a job");
// } else {
//   console.log("Looking for a job");
// }
// let salary = 25000;
// if (salary) {
//   console.log("Salary is set");
// } else {
//   console.log("Salary is not set");
// }

// Conditional statements***
// let earning = 24000;
// if (earning > 35000) {
//   console.log("He is earning well");
// } else if (earning > 25000) {
//   console.log("His earning is not bad");
// } else if ((earning = 15000)) {
//   console.log("His earning is ok.");
// } else {
//   console.log("He is not earning well");
// }

// let today = "Friday";
// if (today === "Saturday") {
//   console.log("we have a main class");
// } else if (today === "Sunday") {
//   console.log("We have support class");
// } else if (today === "Monday") {
//   console.log("We have main class");
// } else if (today === "Tuesday") {
//   console.log("We have support class");
// } else if (today === "Wednesday") {
//   console.log("We have main class");
// } else if (today === "Thursday") {
//   console.log("We have support class");
// } else {
//   console.log("Today is weekend off");
// }

// 5.Nested Conditional Statements***
const x = 11;
if (x >= 10) {
  if (x == 10) {
    console.log("x is equal to 10");
  } else {
    console.log("x is greater than 10");
  }
} else {
  console.log("x is smaller than 10");
}

// 6.Switch Statement***
const day = "Wednesday";
switch (day) {
  case "Saturday":
    console.log("Today is Main class");
    break;
  case "Sunday":
    console.log("Today is Support class");
    break;
  case "Monday":
    console.log("Today is Main class");
    break;
  case "Tuesday":
    console.log("Today is Support class");
    break;
  case "Wednesday":
    console.log("Today is Main class");
    break;
  case "Thursday":
    console.log("Today is Support class");
    break;
  default:
    console.log("Today class is off");
    break;
}
