// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

function maxSubarray(array) {
  // currentNum + nextNum
  // currentNum + nextNum + nextnextNum
  // splice -

  let maxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    let currentNum = array[i];

    if (sumRange(array.splice(0, currentNum)) > maxSum) {
      maxSum = sumRange(array.splice(0, currentNum));
    }
  }
}

function sumRange(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }

  return sum;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
