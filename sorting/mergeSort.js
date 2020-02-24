function mergeArrays(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i <= arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
    console.log(i, j, results);
  }

  return results;
}

function mergeSort(array) {
  // break array into halves until arrays are empty or have 1 element

  if (array.length <= 1) {
    return array;
  }

  //  divide array in half
  let mid = Math.floor(array.length / 2);
  // first half
  let left = mergeSort(array.slice(0, mid));
  // second half
  let right = mergeSort(array.slice(mid));

  // merge arrays until back at full length of array (use mergeArrays function)
  return mergeArrays(left, right);
}

// console.log(mergeArrays([1, 3, 6, 7], [2, 5, 6, 10, 100]));
console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));
