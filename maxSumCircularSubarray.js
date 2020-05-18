// maxSumCircularSubarray

// Example 1:

// Input: [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3
// Example 2:

// Input: [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10
// Example 3:

// Input: [3,-1,2,-1]
// Output: 4
// Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

function maxSumCircularSubarray(nums) {
  if (nums == null || nums.length == 0) return 0;

  let currentMax = nums[0];
  let maxSum = nums[0];
  let currentMin = nums[0];
  let minSum = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    maxSum = Math.max(currentMax, maxSum);

    currentMin = Math.min(currentMin + nums[i], nums[i]);
    minSum = Math.min(currentMin, minSum);

    sum += nums[i];
  }

  //   console.log(maxSum, minSum, sum);

  //   if (sum === minSum) {
  //     return maxSum;
  //   } else {
  //     return sum - minSum;
  //   }

  if (sum - minSum === 0) {
    return maxSum;
  } else {
    return Math.max(maxSum, sum - minSum);
  }
}

console.log(maxSumCircularSubarray([1, -2, 3, -2])); //3
console.log(maxSumCircularSubarray([5, -3, 5])); // 10
console.log(maxSumCircularSubarray([3, -1, 2, -1])); // 4
