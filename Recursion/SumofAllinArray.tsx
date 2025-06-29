// Sum of all numbers in array using Recursion
// Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

// Concepts
// Recursion: The function keeps summing the element at index n and calls itself with n-1.
// Base Case: If n == 0, return the first element.
// Recursive Case: Return arr[n] + sum(n - 1).
// Time & Space Complexity
// Time Complexity: O(n) – one recursive call per element.
// Space Complexity: O(n) – due to call stack.
// Examples
// Input: [5, 2, 6, 1, 3]
// Output: 17
// // 5 + 2 + 6 + 1 + 3 = 17
// Approach
// If n == 0, return arr[0].
// Otherwise, return arr[n] + sum(n - 1).

let arr = [5, 2, 6, 1, 3];

function sum(n) {
  if (n === 0) return arr[0];
  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1)); // 17

// Sum of odd numbers in array using Recursion
// Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

// Concepts
// Recursion: Repeatedly check whether arr[n] is odd, and add it only if true.
// Base Case: If n == 0, return arr[0] if it’s odd, otherwise 0.
// Recursive Case: Return (arr[n] if odd) + sum(n - 1).
// Time & Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(n) (recursive call stack)
// Examples
// Input: [5, 2, 6, 1, 3]
// Odd numbers: 5, 1, 3
// Output: 9
// Approach
// Check if arr[n] is odd.
// If yes, add it to recursive result of sum(n-1).
// Else, skip it and continue recursion.

let arr1 = [5, 2, 6, 1, 3];

function sum(n) {
  let isOdd = arr1[n] % 2 !== 0;
  if (n === 0) return isOdd ? arr1[0] : 0;
  return (isOdd ? arr1[n] : 0) + sum(n - 1);
}

console.log(sum(arr1.length - 1)); // Output: 9
    