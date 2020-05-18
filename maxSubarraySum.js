function maxSubarraySum(nums) {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (let i = 1; i < nums.length; i++) {
    // check if the current number vs. the current number plus current sum is larger
    // take larger and set that as current sum

    currentSum = Math.max(currentSum + nums[i], nums[i]);

    // update max sum to be the larger between max sum and current sum
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([5, -3, 5])); // 10
