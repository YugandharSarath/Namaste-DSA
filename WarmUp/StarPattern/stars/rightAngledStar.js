
// Pattern 2 - Right-Angled Star Triangle Pattern
// Write a program to print a right-angled triangle of stars (*) with n rows.

// Example Output

// *
// **
// ***
// ****
  
// Approach to Print Right-Angled Star Triangle
// Outer Loop (Rows): Run a loop from i = 0 to i = n - 1. Each iteration represents one row.
// Inner Loop (Stars per Row): For each row i, run another loop from j = 0 to j = i and append a * character to a string.
// Print Row: Print the string after the inner loop completes for each row.
// Time & Space Complexity
// Time Complexity: O(n^2) because the total number of stars printed is 1 + 2 + ... + n = n(n+1)/2.
// Space Complexity: O(n) for the temporary string variable storing each row.

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

