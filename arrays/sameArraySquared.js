function same(arr1, arr2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }

  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }
  // console.log(frequencyCounter1)
  // console.log(frequencyCounter2)

  for (let key in frequencyCounter1) {
    // is the number squared in the other object?
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // is the count of that number in that other object?
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 1], [9, 1, 4]));
