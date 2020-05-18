// // Given an array of positive numbers and a positive number ‘S’,
// // find the length of the smallest contiguous subarray whose sum is
// // greater than or equal to ‘S’. Return 0, if no such subarray exists.

// // Example 1:

// // Input: [2, 1, 5, 2, 3, 2], S=7
// // Output: 2
// // Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

// function smallestSubarrayWithGivenSum(arr, targetSum) {
//   let minLength = Infinity;
//   let windowSum = 0;
//   let windowStart = 0;

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     windowSum += arr[windowEnd];

//     while (windowSum >= targetSum) {
//       console.log(windowStart, windowEnd, windowSum);
//       minLength = Math.min(windowEnd - windowStart + 1, minLength);
//       windowSum -= arr[windowStart];
//       windowStart++;
//     }
//   }

//   return minLength;
// }

console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 3, 2], 7)); // 2

function smallestSubarrayWithGivenSum(arr, targetSum) {
  let minLength = Infinity;
  let windowStart = 0;
  let sum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    while (sum >= targetSum) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      sum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength;
}
