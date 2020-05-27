// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

var findMaxLength = function (nums) {
  let maxLength = 0;
  let count = 0;
  let hash = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count--;
    if (nums[i] === 1) count++;

    console.log(i, count);
    console.log("index", hash[count]);
    if (hash[count]) {
      maxLength = Math.max(maxLength, i - hash[count]);
    } else {
      hash[count] = i;
    }
    console.log("max length", maxLength);
    console.log(hash);
    console.log("=========\n");
  }

  return maxLength;
};

// console.log(findMaxLength([0, 1, 0, 1, 0])); // 4
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])); // 6
//   -1 -2 -1 -2 -3 -4 -3 -2
