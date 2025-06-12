// Pattern 3 - Print a Right-Angled Number Triangle
// Write a program that prints a right-angled triangle of numbers of height n.

// Example Output

// 1
// 12
// 123
// 1234
  
// Step-by-Step Approach
// Outer Loop (Rows): Run a loop from i = 0 to i < n. Each iteration represents a new row.
// Inner Loop (Numbers): Run an inner loop from j = 0 to j <= i, and append j + 1 to the row.
// Build and Print: Construct a string for the row and print it after the inner loop ends.
// Time & Space Complexity
// Time Complexity: O(n²) — Each row can have up to n numbers.
// Space Complexity: O(n) — Temporary string to build each row.

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += (j + 1);
  }
  console.log(row);
}