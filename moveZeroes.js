/* Given an array nums, write a function to move all 0's to the end of
it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

// THIS APPROACH DOESN'T WORK BECAUSE NEED TO RETAIN ORDER OF NON-ZEROES
// function moveZeroes(nums) {
//   let leftIdx = 0;
//   let rightIdx = nums.length - 1;

//   while (leftIdx <= rightIdx) {
//     console.log(nums, nums[leftIdx], nums[rightIdx]);
//     // if rightIdx is 0, decrement rightIdx by 1
//     if (nums[rightIdx] === 0) {
//       rightIdx--;
//     }
//     // if leftIdx is not 0, increment leftIdx by 1
//     if (nums[leftIdx] !== 0) {
//       leftIdx++;
//     }

//     // if leftIdx is 0 and right is not 0, swap the elements
//     if (nums[leftIdx] === 0 && nums[rightIdx] !== 0) {
//       // SWAP
//       let temp = nums[leftIdx];
//       nums[leftIdx] = nums[rightIdx];
//       nums[rightIdx] = temp;

//       leftIdx++;
//       rightIdx--;
//     }
//   }

//   return nums;
// }

// SWAP METHOD
function moveZeroes(nums) {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let lastZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      console.log(
        `${nums[i]} is not zero. Last zero found at ${lastZeroIndex}`
      );
      swap(nums, i, lastZeroIndex);
      lastZeroIndex++;
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // 1,3,12,0,0
