// EXAMPLE 1 - Convert days to milliseconds in JavaScript

function daysToMilliseconds(days) {
  // 👇️        hour  min  sec  ms
  return days * 24 * 60 * 60 * 1000;
}

console.log(daysToMilliseconds(1)); // 👉️ 86400000
console.log(daysToMilliseconds(2)); // 👉️ 17280000
console.log(daysToMilliseconds(5)); // 👉️ 432000000

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert days to seconds using JavaScript

// function daysToSeconds(days) {
//   // 👇️        hour  min  sec
//   return days * 24 * 60 * 60;
// }

// console.log(daysToSeconds(1)); // 👉️ 86400
// console.log(daysToSeconds(2)); // 👉️ 172800
// console.log(daysToSeconds(5)); // 👉️ 432000

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert Days to Minutes using JavaScript

// function daysToMinutes(days) {
//   // 👇️        hour  min
//   return days * 24 * 60;
// }

// console.log(daysToMinutes(1)); // 👉️ 1440
// console.log(daysToMinutes(2)); // 👉️ 2880
// console.log(daysToMinutes(5)); // 👉️ 7200
