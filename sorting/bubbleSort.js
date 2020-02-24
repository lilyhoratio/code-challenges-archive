// v1
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// v2 - don't swap the last i elements
function bubbleSort2(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

// test cases

// console.log(
//   bubbleSort([-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6])
// );

// console.log(
//   bubbleSort2([-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6])
// );

// console.log(bubbleSort([8, 5, 2, 9, 4, 6, 3]));
console.log(bubbleSort2([8, 5, 2, 9, 4, 6, 3]));
