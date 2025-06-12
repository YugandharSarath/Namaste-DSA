// Find Largest Number in an Array
// Question
// Write a function that returns the largest number in an array.

// Approach
// Initialize a variable largest to -Infinity.
// Loop through the array.
// If the current element is greater than largest, update largest.
// Return largest after the loop ends.
// Example

// Input: arr = [2, -6, 4, 8, 1, -9]
// Output: 8
  
// Time & Space Complexity
// Time Complexity: O(n) – where n is the number of elements in the array.
// Space Complexity: O(1) – only one variable is used.

function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [2, -6, 4, 8, 1, -9];
let result = findLargest(arr);
console.log("Result:", result); // Output: 8