// brute force
// function maxSubarraySizeK(arr, k) {
//   let maxSum = 0;
//   let windowSum = 0;

//   for (let i = 0; i < arr.length - k + 1; i++) {
//     windowSum = 0;

//     for (let j = i; j < i + k; j++) {
//       windowSum += arr[j];
//     }

//     maxSum = Math.max(maxSum, windowSum);
//   }
//   return maxSum;
// }

// SLIDING WINDOW
function maxSubarraySizeK(arr, k) {
  let maxSum = 0;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);

      windowSum -= arr[windowStart];

      windowStart++;
    }
  }
  return maxSum;
}

console.log(maxSubarraySizeK([2, 1, 5, 1, 3, 2], 3)); // 9

console.log(maxSubarraySizeK([2, 3, 4, 1, 5], 2)); // 7
