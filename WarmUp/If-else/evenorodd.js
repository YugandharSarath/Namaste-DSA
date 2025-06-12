// Question
// Write a function that accepts a number and checks whether it is even or odd.

// If the number is divisible by 2 (i.e., remainder is 0), it’s an Even number.

// Otherwise, it’s an Odd number.

// Test the function with inputs 18 and 5.

// Approach
// Accept the input number in the function.
// Check if the number modulo 2 equals 0.
// If yes, print or return “Even”.
// Otherwise, print or return “Odd”.
// Test the function with different numbers to verify correctness.
// Example
// Input: 18
// Output: Even

// Input: 5
// Output: Odd

function isEvenOdd(num) {
  let rem = num % 2;
  if (rem == 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}

isEvenOdd(18);  // Output: Even number
isEvenOdd(5);   // Output: Odd number