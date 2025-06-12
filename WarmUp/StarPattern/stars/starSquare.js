// Star Pattern Programs in JavaScript, Java, C++, C, and Python
// Pattern 1 – Print n x n Star Square
// Print a square pattern of stars (*) of size n x n.

// Example Output

// ****
// ****
// ****
// ****
// Approach
// Outer Loop (Rows): Run from i = 0 to i = n - 1.
// Inner Loop (Columns): For each row, loop from j = 0 to j = n - 1.
// Build Row String: Append * in each inner loop iteration.
// Print Row: After the inner loop, print the complete row string.
// Time & Space Complexity
// Time Complexity: O(n^2)
// Space Complexity: O(n) (temporary row string)

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}