function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    console.log(left, right, middle);
    if (array[middle] == target) {
      return middle;
    } else if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return false;
}

// console.log(binarySearch([1, 5, 23, 111], 111)); //3

function binarySearchAgain(nums, target) {
  let low = 0;
  let high = Math.floor(nums.length - 1);
  let guess;

  console.log(high);

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    guess = nums[mid];

    if (guess < target) {
      low = mid + 1;
    } else if (guess > target) {
      high = mid - 1;
    } else if (guess === target) {
      return mid;
    }
  }
}

console.log(binarySearchAgain([1, 5, 23, 111], 23)); //3
