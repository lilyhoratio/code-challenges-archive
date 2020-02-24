function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    // remove unnecessary swaps if i is also the lowest
    if (i !== min) {
      // console.log(i, min);
      swap(array, min, i);
    }
  }

  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
