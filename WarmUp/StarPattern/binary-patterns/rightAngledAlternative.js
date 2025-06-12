// Pattern 7 - Print a Right-Angled Triangle of Alternating 1s and 0s
// Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

// Example Output (n = 4)

// 1
// 10
// 101
// 1010
  
// Approach
// Outer Loop (Rows): Loop i from 0 to n - 1.
// Initialize toggle = 1: Start each row with toggle = 1.
// Inner Loop (Columns): For each row, loop j from 0 to i. On each iteration:
// Append toggle to the row string.
// Flip toggle between 1 and 0.
// Print Row: After inner loop, print the row string.
// Time and Space Complexity
// Time Complexity: O(n²)
// Space Complexity: O(n) per row

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}