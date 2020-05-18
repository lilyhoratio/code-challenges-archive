function twoSum(arr, targetSum) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let sum = arr[start] + arr[end];

    if (sum > targetSum) {
      end--;
    } else if (sum < targetSum) {
      start++;
    } else {
      return [start, end];
    }
  }

  return null;
}

console.log(twoSum([1, 2, 3, 4, 6], 6)); // [1,3]
console.log(twoSum([2, 5, 9, 11], 11)); // [0,2]
