// Pattern 4 - Print a Right-Angled Triangle of Repeated Numbers
// Write a program that prints a right-angled triangle where each row contains the same number repeated.

// Example Output

// 1
// 22
// 333
// 4444
  
// Step-by-Step Approach
// Outer Loop (Rows): Loop from i = 0 to i < n.
// Inner Loop (Repeated Numbers): Loop from j = 0 to j <= i, appending i + 1 as a string.
// Build and Print: Build the row string and print it.
// Time & Space Complexity
// Time Complexity: O(n²)
// Space Complexity: O(n) — for the temporary row string

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += (i + 1);
  }
  console.log(row);
}