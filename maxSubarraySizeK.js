// brute force
function maxSubarraySizeK(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0;

    for (let j = i; j < i + k; j++) {
      windowSum += arr[j];
    }

    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxSubarraySizeK([2, 1, 5, 1, 3, 2], 3)); // 9

console.log(maxSubarraySizeK([2, 3, 4, 1, 5], 2)); // 7
