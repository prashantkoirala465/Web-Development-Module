////In this class we learned loops: for
//// Multiplication Table of 3
//
//// Set the number
//let num = 3;
//
//// Loop from 1 to 10
//for (let i = 1; i <= 10; i++) {
//  // Print the result
//  console.log(num + " x " + i + " = " + (num * i));
//}

// let day = prompt('What day is today?')'
// for loops
// let num = prompt("Enter a number:");
//
// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + num * i);
// }

//Using normal for loop

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// debugger;
// //Using continue break
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }

  if (i > 20) {
    break;
  }

  console.log(i);
}
