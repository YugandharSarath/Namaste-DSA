// Pattern 5 - Print a Reverse Right-Angled Triangle of Increasing Numbers
// Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

// Example Output (n = 4)

// 1234
// 123
// 12
// 1
  
// Approach
// Outer Loop (Rows): Loop i from 0 to n - 1. Each iteration represents a row.
// Inner Loop (Print Numbers): For each row, loop j from 0 to n - i - 1 and append j + 1 to a row string.
// Print Row: After the inner loop, print the row string.
// Time and Space Complexity
// Time Complexity: O(n²)
// Space Complexity: O(n) for the temporary row string

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += (j + 1);
  }
  console.log(row);
}