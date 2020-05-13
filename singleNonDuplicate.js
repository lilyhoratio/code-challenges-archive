// // O(n) time
// var singleNonDuplicate = function (nums) {
//   const dupes = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       dupes.add(nums[i]);
//     }
//   }

//   for (let num of nums) {
//     if (!dupes.has(num)) return num;
//   }
// };

// O (log n) time

var singleNonDuplicate = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let areHalvesEven = (high - mid) % 2 === 0;

    if (nums[mid] == nums[mid + 1]) {
      // duplicate on right
      if (areHalvesEven) {
        low = mid + 2;
      } else {
        high = mid - 1;
      }
    } else if (nums[mid] == nums[mid - 1]) {
      // duplicate on left

      if (areHalvesEven) {
        high = mid - 2;
      } else {
        low = mid + 1;
      }
    } else {
      return nums[mid];
    }
  }
};

console.log(singleNonDuplicate([1, 1, 2, 2, 3, 4, 4, 8, 8]));
