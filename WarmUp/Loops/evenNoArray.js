// Print All Even Numbers in an Array
// Question
// Write a program to print all even numbers from an array.

// Example array: [10, 3, 5, 2, 7, 6, 9]

// Expected Output: 10 2 6

// Approach
// Iterate through each element in the array.
// Check if the element is divisible by 2.
// If yes, print the element (it’s even).
// Example

// Input: [10, 3, 5, 2, 7, 6, 9]
// Output: 10 2 6

let arr = [10, 3, 5, 2, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}