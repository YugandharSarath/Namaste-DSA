// Pattern 8 - Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
// Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

// Output (n = 4)

// 1
// 01
// 010
// 1010
  
// Approach
// Global Toggle Variable: Declare toggle = 1 before the outer loop.
// Outer Loop: Loop i from 0 to n - 1.
// Inner Loop: Loop j from 0 to i. On each iteration:
// Append toggle to the row string.
// Flip toggle: 1 → 0 and 0 → 1.
// Print the row after the inner loop.
// Key Difference
// In the previous pattern, toggle = 1 was reset each row. Here, the toggle continues globally across the entire pattern.

// Time & Space Complexity
// Time Complexity: O(n²)
// Space Complexity: O(n) per row

let n = 4;
let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}