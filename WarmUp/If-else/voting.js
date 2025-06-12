// Question
// Write a function that accepts a person’s age and prints whether the person is:

// “Invalid input” if the age is less than 1.
// “Not eligible to vote” if the age is less than 18.
// “Eligible to vote” if the age is 18 or above.
// Call the function with different test values: 18, 0, and 8.

// Approach
// To solve this problem, follow these steps:

// Accept the input age in the function.
// Check if the age is less than 1; if yes, print “Invalid input”.
// If the age is valid but less than 18, print “Not eligible to vote”.
// If the age is 18 or more, print “Eligible to vote”.
// Test the function with various inputs to ensure all cases work correctly.
// Examples
// eligibleToVote(18) prints Eligible to vote
// eligibleToVote(0) prints Invalid input
// eligibleToVote(8) prints Not eligible to vote

function eligibleToVote(age) {
  if (age < 1) {
    console.log("Invalid input");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

eligibleToVote(18);  // Eligible to vote
eligibleToVote(0);   // Invalid input
eligibleToVote(8);   // Not eligible to vote